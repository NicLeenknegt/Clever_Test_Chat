import { MessageType } from "../../redux/message/types";

export class ButtonMessage implements MessageType {
    renderType: string = "BUTTON"    
    context?: any;
    question:string = ""
    isHorizontal:boolean = false
    buttons:Button[] = []

    constructor(init?:Partial<ButtonMessage>) {
        Object.assign(this, init)
    }

    public fromJson(src:any, context:any) {
        this.context = context
        this.question = src.question
        this.isHorizontal = src.isHorizontal
        for (var index in src.buttons) {
            var button = src.buttons[index]
            this.buttons.push(
                new Button({
                    title:button.title,
                    text:button.text
                })
            )
        }
        return this;
    }

} 

class Button {
    title:string = ""
    text:string = ""

    constructor(init?:Partial<Button>) {
        Object.assign(this, init)
    }
}