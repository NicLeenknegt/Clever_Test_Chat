export class Intent{
    input:string = ""
    intent:string = ""
    confidence:number = 0

    constructor(init?:Partial<Intent>) {
        Object.assign(this, init)
    }

    public fromJson(src:any, input:string):Intent {
        this.input = input;
        this.intent = '#' + src.intent;
        this.confidence = src.confidence;
        return this;
    }

}