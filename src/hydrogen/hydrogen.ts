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
     * @example ['user', ':firstName', ':lastName'] // using with DestinationParamMap will convert it to user/Max/Payne
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
            this.options.destination = this.options.destination!.replace(`:${k}`, params[k]);
        })
        return Hydrogen.instance;
    }

    /**
     * Change the server location which will recieve the request.
     * @example https://localhost:3000/
     * @example https://remote.server.com/
     * @param { string } baseUrl - URL of the server.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public BaseUrl(baseUrl: string): Hydrogen {
        this.options.baseUrl = baseUrl;
        return Hydrogen.instance;
    }

    /**
     * Set query params for the request.
     * @example {page: '1', sort: 'ASC'}
     * @param { object } queryParams - Query params object.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public QueryParams(queryParams: object): Hydrogen {
        this.options.queryParams = queryParams;
        return Hydrogen.instance;
    }

    /**
     * The data to be sent along with the request.
     * @param { string | object | ArrayBuffer | ArrayBufferView | URLSearchParams | FormData | File | Blob } data - Data to be sent.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public Data(data: string | object | ArrayBuffer | ArrayBufferView | URLSearchParams | FormData | File | Blob): Hydrogen {
        this.options.data = data;
        return Hydrogen.instance;
    }

    /**
     * Request will be canceled after said time if it didn't bring any answer from server.
     * @param { number } timeout - Timeout in milliseconds.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public Timeout(timeout: number): Hydrogen {
        this.options.timeout = timeout;
        return Hydrogen.instance;
    }

    /**
     * Retry the request if it failed.
     * @param { number } retry - How many times to retry.
     * @returns { Hydrogen } Instance of Hydrogen
     */
    public Retry(retry: number): Hydrogen {
        this.options.retry = retry;
        return Hydrogen.instance;
    }

    /**
     * Build the request and get it ready to be sent.
     * @returns { AxiosEngine } A copy of your request with HTTP engine built in it.
     */
    public Build(): AxiosEngine {
        let optionsClone = this.options
        this.options = new HydrogenOptions();
        switch (optionsClone.engine) {
            case 'axios':
                return new AxiosEngine(optionsClone);
                break;
        
            default:
                throw new Error("Engine Not Implemented!");
                break;
        }
    }

    /**
     * Get a singleton instance of Hydrogen.
     * @returns { Hydrogen } Instance of Hydrogen
     */
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