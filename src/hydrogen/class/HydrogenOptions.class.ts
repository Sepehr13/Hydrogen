import { RequestType } from "../enum/RequestType.enum";

export class HydrogenOptions {
    private _engine: 'axios' | undefined;
    private _type: RequestType | undefined;
    private _destination: string | undefined;
    private _baseUrl: string | undefined;
    private _queryParams: object | undefined;
    private _data: string | object | ArrayBuffer | ArrayBufferView | URLSearchParams | FormData | File | Blob | undefined;
    private _timeout: number | undefined;
    private _retry: number = 0;

    get engine(): 'axios' { 
        if(typeof this._engine === 'undefined') throw new Error("Engine has not been set!");
        return this._engine 
    };
    set engine(engine: 'axios') { this._engine = engine };

    get type(): RequestType { 
        if(typeof this._type === 'undefined') throw new Error("Request type has not been set!");
        return this._type 
    };
    set type(type: RequestType) { this._type = type };

    get destination(): string | undefined {
        return this._destination
    };
    set destination(destination: string) { this._destination = destination };

    get baseUrl(): string {
        if(typeof this._baseUrl === 'undefined') throw new Error("Base URL has not been set!");
        return this._baseUrl
    };
    set baseUrl(baseUrl: string) { this._baseUrl = baseUrl };

    get queryParams(): object | undefined {
        return this._queryParams
    };
    set queryParams(queryParams: object) { this._queryParams = queryParams };

    get data(): string | object | ArrayBuffer | ArrayBufferView | URLSearchParams | FormData | File | Blob | undefined {
        return this._data
    };
    set data(data: string | object | ArrayBuffer | ArrayBufferView | URLSearchParams | FormData | File | Blob) { this._data = data };

    get timeout(): number | undefined {
        return this._timeout
    };
    set timeout(timeout: number) { this._timeout = timeout };

    get retry(): number {
        return this._retry
    };
    set retry(retry: number) { this._retry = retry };
}