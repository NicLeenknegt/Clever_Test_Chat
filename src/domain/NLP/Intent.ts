export class Intent{
    input:string = ""
    intent:string = ""
    confidence:string = ""
    mapIntent:(intent:any) => any = (intent:any) => {}

    constructor(init?:Partial<Intent>) {
        Object.assign(this, init)
    }

    public fromJson(src:any, input:string, mapIntent:(intent:any) => any):Intent {
        this.input = input;
        this.intent = '#' + src.intent;
        this.confidence = (src.confidence as number).toFixed(2);
        this.mapIntent = mapIntent
        return this;
    }

}