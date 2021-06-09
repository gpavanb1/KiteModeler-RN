import { DiamondGeometry } from './geom'
import { DiamondBridle } from './bridle'
import { FlyParameters } from './fly'
import { Composition } from './composition'
import { DiamondDashboard } from './dashboard'

export function solveDiamond(inp: any) {
    const geom = new DiamondGeometry(inp.h1, inp.h2, inp.w1, inp.t)
    const bridle = new DiamondBridle(inp.B, inp.K, geom.h())
    const fly = new FlyParameters(inp.wind_speed, inp.altitude,
                        inp.line_length, inp.env_name)
    const compo = new Composition(inp.surface,
                        inp.frame,
                        inp.tail,
                        inp.line)
    const dashboard = new DiamondDashboard(geom, bridle, fly, compo)

    return dashboard
}
 