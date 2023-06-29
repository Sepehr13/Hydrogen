import { Observable } from "rxjs";
import { BareEngine } from "../class/BareEngine.class";
import { HydrogenOptions } from "../class/HydrogenOptions.class";
import axios from "axios";

export class AxiosEngine extends BareEngine {

    constructor(options: HydrogenOptions) {
        super(options);
    }

    execute<T>(): Observable<T> {
        return new Observable(observer => {
            axios({
                method: this.options.type,
                url: this.options.destination
            }).then(res => {
                observer.next()
            });
        });
    }
    
}