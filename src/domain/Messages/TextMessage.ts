import { MessageType } from "../../redux/message/types";

export class UserTextMessage implements MessageType {
    renderType: string = "USER_TEXT"
    messages:Text[] = []
    context: any 
    index:number = 0
    
    /**
     *
     */
    constructor(init?:Partial<UserTextMessage>) {
        Object.assign(this, init);
    }

    public fromJson(src:any, context:any){
        this.context = context
        for (var index in src.messages as any[]) {
            this.messages.push({
                text:src.messages[index].text
            })
        }
        return this;
    }

    public toJson():any {
        
        return JSON.stringify({
            "input":
            {
                "text":this.messages[0].text
            },
            "context":this.context
        })
    }
}

export class ReplyTextMessage implements MessageType {
    renderType: string = "REPLY_TEXT"
    messages:Text[] = []
    context:any
    public fromJson(src:any, context:any){
        this.context = context
        for (var index in src.messages as any[]) {
            this.messages.push({
                text:src.messages[index].text
            })
        }
        return this;
    }
}

export class Text {
    text:string

    constructor(text:string) {
        this.text = text
    }
}