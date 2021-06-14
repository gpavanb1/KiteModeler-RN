import { DiamondGeometry, Geometry } from './geom'
import { Bridle, DiamondBridle } from './bridle'
import { FlyParameters } from './fly'
import { Composition } from './composition'
import { minimize_bounded } from '../solver/bounded_solver'

export abstract class Dashboard {
    geom: Geometry;
    bridle: Bridle;
    fly: FlyParameters;
    compo: Composition;
    _pressure: number;
    _temperature: number;
    _density: number;
    _weight: number;
    _cp: number;
    _cg: number;
    _surface_area: number;
    _frame: number;
    _lift: number;
    _drag: number;
    _aoa_no_torque: number;
    _vert_tension: number;
    _horiz_tension: number;
    _tension: number;


    constructor(geom: Geometry, bridle: Bridle, fly: FlyParameters, compo: Composition) {
        this.geom = geom
        this.bridle = bridle
        this.fly = fly
        this.compo = compo

        // Get sea level properties
        this._pressure = this.fly.env.pressure(this.fly.altitude)
        this._temperature = this.fly.env.temperature(this.fly.altitude)
        this._density = this.fly.env.density(this.fly.altitude)

        // Weight
        this._weight = this.kite_weight()

        // Center of pressure and gravity
        this._cp = this.geom.cp()
        // CG calculation uses cp for surface
        this._cg = this.cg()
        
        // Geometric parameters
        this._surface_area = this.geom.surface_area()
        this._frame = this.geom.frame()

        // Solve such that torque is zero
        const min_func = (x: number) => Math.abs(this.torque(x))
        const result = minimize_bounded(min_func, [Math.PI/180., Math.PI/2.])

        if (!result.success) throw Error(result.status)
        else this._aoa_no_torque = result.x

        // Calculate corresponding lift and drag
        this._lift = this.lift(this._aoa_no_torque)
        this._drag = this.drag(this._aoa_no_torque)
        
        // Source : https://www.grc.nasa.gov/WWW/K-12/airplane/kitefor.html
        this._vert_tension = this.vertical_tension()
        this._horiz_tension = this.horiz_tension()
        this._tension = Math.sqrt(Math.pow(this._horiz_tension, 2) + Math.pow(this._vert_tension, 2))
    }

    lift(a: number) {
        const cl = this.geom.cl(a)
        const rho = this._density
        // Convert to m2
        const A = 1.e-4 * this.geom.surface_area()
        const V = this.fly.wind_speed
        // Convert to gram force
        let f = cl * A * rho * V * V / 2
        f = 1.e3 * (f / 9.8)
        return f
    }


    drag(a: number) {
        const cd = this.geom.cd(a)
        const rho = this._density
        // Convert to m2
        const A = 1.e-4 * this.geom.surface_area()
        const V = this.fly.wind_speed
        // Convert to gram force
        let f = cd * A * rho * V * V / 2
        f = 1.e3 * (f / 9.8)
        return f
    }

    vertical_tension() {
        // Unit line weight
        const p = this.compo.line.density
        // Line length
        const s = this.fly.line
        const g = s * p
        const ret = this._lift - g - this._weight
        return (ret > 0) ? ret : 0.0
    }


    horiz_tension() {
        return (this._vert_tension > 0) ? this._drag : 0.0
    }


    catenary_equation(x: number) {
        // Unit line weight
        const p = this.compo.line.density
        // Line length
        const s = this.fly.line
        const g = s * p
        const L = this._lift
        const D = this._drag
        const W = this._weight
    
        // Kite won't fly
        if (L < g + W) {
            return 0.0
        }

        // Integration constants
        const c1 = Math.asin((L - g - W) / D)
        const c2 = -(D / p) * Math.cosh(c1)
    
        // Source: https://www.grc.nasa.gov/WWW/K-12/airplane/kitesag.html
        return c2 + (D / p) * Math.cosh(p * x / D + c1)
    }

    range() {
        // Unit line weight
        const p = this.compo.line.density
        // Line length
        const s = this.fly.line
        const g = s * p
        const L = this._lift
        const D = this._drag
        const W = this._weight
    
        // Kite won't fly
        if (L < g + W) {
            return 0.0
        } 
    
        // Source: https://www.grc.nasa.gov/WWW/K-12/airplane/kitesag.html
        return (D / p) * (Math.asinh((L - W) / D) - Math.asinh((L - g - W) / D))
    
    }

    height() {
        return this.fly.altitude + this.catenary_equation(this.range())
    }
        
    abstract cg(): number
    abstract kite_weight(): number
    abstract torque(a: number): number
}

export class DiamondDashboard extends Dashboard {
    kite_weight() {
        const geom = (this.geom as DiamondGeometry)
        const w_surf = this.compo.surface.density * this.geom.surface_area()
        const w_frameH = this.compo.frame.density * geom.w1
        const w_frameV = this.compo.frame.density * (geom.h1 + geom.h2)
        const w_tail = this.compo.tail.density * geom.t
        return w_frameH + w_frameV + w_surf + w_tail
    }

    cg() {
        const w_surf = this.compo.surface.density * this.geom.surface_area()
        // Area-weighted average of triangle centroids
        const geom = (this.geom as DiamondGeometry)
        const h_surf = (geom.h1 + 2 * geom.h2) / 3
        const w_frameH = this.compo.frame.density * geom.w1
        const h_frameH = geom.h2
        const w_frameV = this.compo.frame.density * (geom.h1 + geom.h2)
        const h_frameV = (geom.h1 + geom.h2) / 2
        const w_tail = this.compo.tail.density * geom.t
        const h_tail = - geom.t / 2
        const dot_prod = (w_surf * h_surf + w_frameH * h_frameH +
                   w_frameV * h_frameV + w_tail * h_tail)
        return dot_prod / this._weight
    }

    torque(a: number) {
        const L = this.lift(a)
        const D = this.drag(a)
        const W = this._weight
        const cp = this._cp
        const cg = this._cg
        const xb = (this.bridle as DiamondBridle).Xb
        const yb = (this.bridle as DiamondBridle).Yb


        const T = (- L * Math.cos(a) * (yb - cp) 
            - L * Math.sin(a) * xb 
            + D * Math.cos(a) * xb 
            - D * Math.sin(a) * (yb - cp) 
            + W * Math.cos(a) * (yb - cg) 
            + W * Math.sin(a) * xb )

        return T
    }
}