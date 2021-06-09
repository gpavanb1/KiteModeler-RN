import { Material } from './material';

export const SurfaceMaterials: {[key: string]: Material} = {
    "Plastic": new Material(0.0020881519, "g/cm2"),
    "Tissue Paper": new Material(0.0020108128, "g/cm2"),
    "Rip Stop": new Material(0.004197396, "g/cm2"),
    "Paper": new Material(0.005638713, "g/cm2"),
    "Silk Span": new Material(0.0016873954, "g/cm2"),
    "Cellophane": new Material(0.0028826338, "g/cm2")
}

export const FrameMaterials: {[key: string]: Material} = {
    "1/4 Balsa": new Material(0.044109922, "g/cm"),
    "1/8 Balsa": new Material(0.02196567, "g/cm"),
    "1/4 Birch": new Material(0.24108662, "g/cm"),
    "3/8 Plastic Tube": new Material(0.23394331, "g/cm"),
    "Skewer Stick": new Material(0.036274604, "g/cm")
}

export const TailMaterials: {[key: string]: Material} = {
    "1 in Plastic": new Material(0.0053039053, "g/cm"),
    "3 in Plastic": new Material(0.015911717, "g/cm"),
    "1 in Nylon": new Material(0.00582626, "g/cm")
}

export const LineMaterials: {[key: string]: Material} = {
    "Nylon": new Material(0.37204725, "g/m"),
    "Cotton": new Material(0.18602362, "g/m")
}