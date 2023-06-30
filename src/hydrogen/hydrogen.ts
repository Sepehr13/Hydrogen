import { HydrogenOptions } from "./class/HydrogenOptions.class";
import { AxiosEngine } from "./engine/Axios.engine";
import { RequestType } from "./enum/RequestType.enum";

class Hydrogen {
    private static instance: Hydrogen;

    private options: HydrogenOptions = new HydrogenOptions();

    private constructor() {}

    /**
     * Defines the type of the request.
     * @param { RequestType } type - Type of the request
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public Type(type: RequestType): Hydrogen {
        this.options.type = type;
        return Hydrogen.instance;
    }

    /**
     * Defines the destination of the request.
     * @example ['user', 'getMe'] // converts to user/getMe
     * @example ['user', ':firstName', ':lastName'] // use with DestinationParamMap will convert it to user/Max/Payne
     * @param { string[] } destination - Destination of the request to be sent.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public Destination(destination: string[]): Hydrogen {
        this.options.destination = destination.join('/');
        return Hydrogen.instance;
    }

    /**
     * Defines the destination of the request.
     * @example {firstName: 'Max', lastName: 'Payne'}
     * @param { string[] } destination - Destination of the request to be sent.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public DestinationParamMap(params: any): Hydrogen {
        if (typeof this.options.destination !== "string") throw new Error("Destination has not been set!");
        Object.keys(params).forEach(k => {
            this.options.destination!.replace(`:${k}`, params[k]);
        })
        return Hydrogen.instance;
    }

    public BaseUrl(baseUrl: string): Hydrogen {
        this.options.baseUrl = baseUrl;
        return Hydrogen.instance;
    }

    public Build(): AxiosEngine | undefined {
        let optionsClone = this.options
        this.options = new HydrogenOptions();
        switch (optionsClone.engine) {
            case 'axios':
                return new AxiosEngine(optionsClone);
                break;
        
            default:
                break;
        }
    }

    private static getInstance(): Hydrogen {
        if (!Hydrogen.instance) {
            Hydrogen.instance = new Hydrogen();
        }
        return Hydrogen.instance;
    }

    /**
     * Get an instance of Hydrogen with Axios engine underneath.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public static axiosEngine(): Hydrogen {
        let axiosInstance = this.getInstance();
        axiosInstance.options.engine = "axios";
        return axiosInstance;
    }
}

export { Hydrogen };