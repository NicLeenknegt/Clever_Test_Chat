
export class Entity {
    input:string = ""
    entity:string = ""
    confidence:string = ""
    addValue:(entity:any) => any  = (entity:any) => {} 
    addSynonym:(entity:any) => any  = (entity:any) => {} 

    constructor(init?:Partial<Entity>) {
        Object.assign(this, init)
    }

    public fromJson(src:any, input:string, addValue:(entity:Entity) => void, addSynonym:(entity:Entity) => void):Entity {
        var location:number[] = src.location;
        this.input = input.slice(location[0] , location[1]);
        this.entity = '@' + src.entity + ":" + src.value;
        this.confidence = (src.confidence as number).toFixed(2);
        this.addValue = addValue;
        this.addSynonym = addSynonym;
        return this;
    }
}