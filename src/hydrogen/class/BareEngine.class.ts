import { Observable } from "rxjs";
import { HydrogenOptions } from "./HydrogenOptions.class";

export abstract class BareEngine {
    private _options: HydrogenOptions | undefined;
    private _abortController: AbortController = new AbortController();

    constructor(options: HydrogenOptions) {
        this._options = options;
    }

    public cancel(): void {
        this._abortController.abort();
    }

    abstract execute<T>(): Observable<T>;

    get options(): HydrogenOptions {
        if (!(this._options instanceof HydrogenOptions)) throw new Error("Hydrogen options has not been set in BareEngine class!");
        return this._options;
    }
}