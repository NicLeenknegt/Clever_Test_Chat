import { MessageType } from "../../redux/message/types";

export class ImageMessage implements MessageType {
    renderType: string = "IMAGE"    
    context: any;
    question:string = ""
    images:Image[] = []
    index: number = 0

    constructor(init?:Partial<ImageMessage>) {
        Object.assign(this, init)
    }

    public fromJson(src: any, context:any) {
        this.context = context
        this.question = src.question
        for (var index in src.images) {
            this.images.push( 
                new  Image ({
                    text:src.images[index].text,
                    url:src.images[index].url
                })
            )
        } 
        return this;
    }
}

export class Image {
    text:string = ""
    url:string = ""

    constructor(init?:Partial<Image>) {
        Object.assign(this,init)
    }
}