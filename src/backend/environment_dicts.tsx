import { Environment } from './environment';


// Source for Earth
// https://www.grc.nasa.gov/WWW/K-12/airplane/atmosmet.html
const earth_pressure = (h: number) => (101.29 * Math.pow(earth_temperature(h) / 288.08, 5.256));
const earth_temperature = (h: number) => (273.1 + 15.04 - 0.00649 * h);


export const Environments: {[key: string]: Environment} = {
    "Earth": new Environment(earth_pressure, earth_temperature),
}