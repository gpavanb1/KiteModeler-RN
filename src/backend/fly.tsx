import { Material } from './material';
import { Environment } from './environment';
import { Environments } from './environment_dicts';


export class FlyParameters {
    wind_speed: number;
    altitude: number;
    line: number;
    env: Environment;

    constructor(wind_speed: number, altitude: number, line: number, env_name: string) {
        this.wind_speed = wind_speed
        this.altitude = altitude
        this.line = line
        // TODO : Payload
        this.env = Environments[env_name]
    }

}
        