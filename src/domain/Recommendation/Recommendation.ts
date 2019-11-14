import { Property } from "./Property";

export class Recommendation {
    name:string = ""
    standardProperties:Property[] = []
    negativeProperties:Property[] = []
    positiveProperties:Property[] = []
    neutralProperties:Property[] = []

    /**
     *
     */
    constructor(init?:Partial<Recommendation>) {
        Object.assign(this, init)
    }

    public fromJson(src:any) {
        if (src.hasOwnProperty("positiveProperties")) {
            src.positiveProperties.forEach((element: any) => {
                this.positiveProperties.push(new Property().fromJson(element))
            });
        } 
        if (src.hasOwnProperty("negativeProperties")) {
            src.negativeProperties.forEach((element: any) => {
                this.negativeProperties.push(new Property().fromJson(element))
            });
        } 

        this.name = new Property().fromJson(src.name).value
        this.standardProperties.push(new Property().fromJson(src.price))
        this.standardProperties.push(new Property().fromJson(src.offerurl))
        this.standardProperties.push(new Property().fromJson(src.sku))
        this.standardProperties.push(new Property().fromJson(src.picture))
        return this;
    }
}