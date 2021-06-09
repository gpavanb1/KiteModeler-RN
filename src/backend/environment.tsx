type HeightFunction = (h: number) => number;

export class Environment {
    pressure: HeightFunction;
    temperature: HeightFunction;

    constructor(pressure: HeightFunction, temperature: HeightFunction) {
        this.pressure = pressure;
        this.temperature = temperature;
    }

    // Variation of density with height
    density(h: number) {
        // Ideal gas law
        const p = 1.e3 * this.pressure(h)
        const T = this.temperature(h)
        const R = 8.314
        const M = 28.97e-3
        return (p * M) / (R * T)
    }
}
        