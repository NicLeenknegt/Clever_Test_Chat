import { MessageType } from "../../redux/message/types";

export class ErrorMesage implements MessageType {
    renderType:string = "ERROR"
    error:string = ""
    context:any
    index:number = 0

    constructor(init?:Partial<ErrorMesage>) {
        Object.assign(this, init);
    }
}