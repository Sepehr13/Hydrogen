import { RequestType } from "../enum/RequestType.enum";

export class HydrogenOptions {
    private _engine: 'axios' | undefined;
    private _type: RequestType | undefined;
    private _destination: string | undefined;

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

    get destination(): string {
        if(typeof this._destination === 'undefined') throw new Error("Request type has not been set!");
        return this._destination
    };
    set destination(destination: string) { this._destination = destination };
}