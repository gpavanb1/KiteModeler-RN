import { DiamondGeometry } from './geom'
import { DiamondBridle } from './bridle'
import { FlyParameters } from './fly'
import { Composition } from './composition'
import { DiamondDashboard } from './dashboard'

export function solveDiamond(inp: any) {
    const geom = new DiamondGeometry(inp.geom.h1, inp.geom.h2, inp.geom.w1, inp.geom.t)
    const bridle = new DiamondBridle(inp.bridle.b, inp.bridle.k, geom.h())
    const fly = new FlyParameters(inp.fly.wind_speed, inp.fly.altitude,
                        inp.fly.line_length, inp.fly.env_name)
    const compo = new Composition(inp.material.surface,
                        inp.material.frame,
                        inp.material.tail,
                        inp.material.line)
    const dashboard = new DiamondDashboard(geom, bridle, fly, compo)

    return dashboard
}