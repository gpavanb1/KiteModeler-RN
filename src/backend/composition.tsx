import { Material } from './material';
import { SurfaceMaterials, FrameMaterials, TailMaterials, LineMaterials } from './material_dicts' 


export class Composition {
    surface: Material;
    frame: Material;
    tail: Material;
    line: Material;

    constructor(surface: string, frame: string, tail: string, line: string) {
        this.surface = SurfaceMaterials[surface]
        this.frame = FrameMaterials[frame]
        this.tail = TailMaterials[tail]
        this.line = LineMaterials[line]
    }
}        