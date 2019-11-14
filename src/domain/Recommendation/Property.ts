export class Property {
    property:string = ""
    value:string = ""

    /**
     *
     */
    constructor(init?:Partial<Property>) {
        Object.assign(this, init);
    }

    public fromJson(src:any):Property {
        if (src.hasOwnProperty("valueTranslation"))
            this.value = src.valueTranslation
        else
            this.value = src.value
        if (src.hasOwnProperty("propertyTranslation"))
            this.property = src.propertyTranslation
        else
            this.property = src.property
        return this;
    }
}