export abstract class Bridle {}

// https://www.grc.nasa.gov/WWW/k-12/VirtualAero/BottleRocket/airplane/kitebrid.html
// B - bridle length
// K - knot length
// H - kite height
// A - knot angle
// Xb, Yb - bridle point coordinates


export function knot_angle(b: number, k: number, h: number) : number {
    const ret = (k*k + h*h - (b - k)*(b - k))/(2*k*h)
    return (Math.abs(ret) > 1) ? 0.0 : Math.acos(ret)  
};
    

export class DiamondBridle extends Bridle {
    B: number;
    K: number;
    H: number;
    A: number;
    Xb: number;
    Yb: number;


    constructor(b: number, k: number, h: number) {
        super()
        if (b <= k) {
            throw new Error('Knot must be larger than bridle')
        }
        else {
            this.B = b
            this.K = k
            this.H = h
            this.A = knot_angle(b, k, h)
            this.Xb = k*Math.sin(this.A)
            this.Yb = k*Math.cos(this.A)
        }
        
    }
}
            