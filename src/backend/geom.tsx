export abstract class Geometry {
    abstract h(): number
    abstract surface_area(): number
    abstract frame(): number
    abstract aspect_ratio(): number
    abstract cl(a: number): number
    abstract cd(a: number): number
    abstract cp(): number
}

export class DiamondGeometry extends Geometry {
    h1: number;
    h2: number;
    w1: number;
    AR: number;
    t: number;

    constructor(h1: number, h2: number, w1: number, t = 0) {
        super()
        this.h1 = h1
        this.h2 = h2
        this.w1 = w1
        this.AR = this.aspect_ratio()
        // Tail length
        this.t = t
    }

    h() {
        return this.h1 + this.h2
    }
        
    surface_area() {
        return 0.5 * (this.h1 + this.h2) * this.w1
    }
        
    frame() {
        return this.h1 + this.h2 + this.w1
    }

    aspect_ratio() {
        const s = this.w1
        const A = this.surface_area()
        return s * s / A
    }
        
    // Source: https://www.grc.nasa.gov/WWW/K-12/airplane/kitelift.html
    // Coefficient of lift for a thin airfoil
    cl(a: number) {
        // Derived from Kutta-Joukowski theorem
        // Calculate circulation for uniform velocity around thin plate
        // Get lift coefficient from L = rho*U*Gamma
        const Clo = 2 * Math.PI * a
        // Downwash effects
        return Clo / (1 + Clo / (Math.PI * this.AR))
    }

    // Source: https://www.grc.nasa.gov/WWW/K-12/airplane/kitedrag.html
    // Coefficient of drag for a thin airfoil
    cd(a: number) {
        // Blasius equation solution
        const Cdo = 1.28 * Math.sin(a)
        // Profile drag + Induced drag 
        return Cdo + Math.pow(this.cl(a), 2) / (.7 * Math.PI * this.AR)
    }

    // center of pressure for given geometry
    cp() {
        return 0.5 * (this.h1 + this.h2) + this.h2 / 3
    }   
}
        

    

    










