import { MessageType } from "../../redux/message/types";

export class LoadingMessage implements MessageType {
    renderType: string = "LOADING"

    public fromJson(src:any){
        return this;
    }
}