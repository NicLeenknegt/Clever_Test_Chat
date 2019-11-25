export class ContextModel {
    variables:Variable[] = []

    /**
     *
     */
    constructor(init?:Partial<ContextModel>) {
        Object.assign(this, init)
    }

    public createNext(nextVars:Variable[]):ContextModel {
        var nextContext = new ContextModel()
        for( let variable of this.variables) {
            var nextVar:Variable = nextVars.filter((value) => {return value.name === variable.name})[0]
            nextContext.variables.push(variable.createNext(nextVar))
        }
        return nextContext
    }
}

export class Variable {
    name:string = ""
    value :string = ""
    type:string = ""

    constructor(init?:Partial<Variable>) {
        Object.assign(this, init)
    }

    public fromJson(src:any):Variable {

        this.name = src.context;
        this.value = src.value === undefined?"":"\"" + src.value + "\""; 
        this.type = src.contextType;
        return this;
    }

    public createNext(nextVar:Variable):Variable {
        if (nextVar.value === "")
            nextVar.value = this.value
        return nextVar
    }
}