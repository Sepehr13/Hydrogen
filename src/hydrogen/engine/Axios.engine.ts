import { Observable, retry } from "rxjs";
import { BareEngine } from "../class/BareEngine.class";
import { HydrogenOptions } from "../class/HydrogenOptions.class";
import axios from "axios";
import { HydrogenResponse } from "../interface/Response.interface";

export class AxiosEngine extends BareEngine {

    constructor(options: HydrogenOptions) {
        super(options);
    }

    execute<T>(): Observable<HydrogenResponse<T>> {
        return new Observable<HydrogenResponse<T>>(observer => {
            axios({
                method: this.options.type,
                url: this.options.destination,
                baseURL: this.options.baseUrl,
                params: this.options.queryParams,
                data: this.options.data,
                signal: this.cancelSignal,
                timeout: this.options.timeout,
            }).then(res => {
                observer.next({
                    data: res.data,
                    status: res.status,
                    statusText: res.statusText
                });
                observer.complete();
            }).catch((e) => {
                const { code, message, name } = e;
                observer.error({ code, message, name });
                observer.complete();
            });
        }).pipe(retry(this.options.retry));
    }
    
}