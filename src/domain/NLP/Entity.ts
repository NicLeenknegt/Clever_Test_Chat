
export class Entity {
    input:string = ""
    entity:string = ""
    confidence:number = 0 
    add_value:(entity:Entity) => void  = (entity:Entity) => {} 

    constructor(init?:Partial<Entity>) {
        Object.assign(this, init)
    }

    public fromJson(src:any, input:string, add_value:(entity:Entity) => void):Entity {
        var location:number[] = src.location
        this.input = input.slice(location[0] , location[1])
        this.entity = '@' + src.entity + ":" + src.value;
        this.confidence = src.confidence;
        this.add_value = add_value
        return this;
    }
}