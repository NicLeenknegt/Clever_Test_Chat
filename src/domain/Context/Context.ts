export class Variable {
    name:string = ""
    value :string = ""
    type:string = ""

    constructor(init?:Partial<Variable>) {
        Object.assign(this, init)
    }

    public fromJson(src:any):Variable {
        this.name = src.context
        this.value = src.value === undefined?"":src.value
        this.type = src.contextType
        return this;
    }
}