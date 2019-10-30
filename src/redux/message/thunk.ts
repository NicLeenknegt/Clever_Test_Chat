import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../index"
import { MessageType } from "./types";
import {LoadingMessage} from '../../domain/Messages/LoadingMessage'
import {ReplyTextMessage,UserTextMessage } from '../../domain/Messages/TextMessage'
import './action'
import { loadingMessage, addMessage, errorMessage } from "./action";
import { ChatService } from "../../services/ChatService"
import { ErrorMesage } from "../../domain/Messages/ErrorMessage";
import { ImageMessage } from "../../domain/Messages/ImageMessage";

export const thunkStartConversation = (
    embedToken:string,
    message:MessageType
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(
        loadingMessage(
            new LoadingMessage()
        )
    )
    new ChatService()
        .initiateConversation()
        .then( res => {
            dispatch(
                addMessage(
                    new ReplyTextMessage().fromJson(res.data.responses[0], res.data.context)
                )
            )
        }
            
        ).catch( err => {
            console.log(err.message)
            
        }
            
        )

}

export const thunkSendMessage = (
    message:UserTextMessage
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    dispatch(
        addMessage(
            message
        )
    )
    dispatch(
        loadingMessage(
            new LoadingMessage()
        )
    )
    new ChatService()
            .sendMessage(message)
            .then( res => {
                console.log(res)
                for (var index in res.data.responses) {
                    switch(res.data.responses[index].messageType) {
                        case "TEXT": 
                            dispatch(
                                addMessage(
                                    new ReplyTextMessage().fromJson(res.data.responses[index], res.data.context)
                                )
                            )
                            break;
                        case "IMAGE":
                            dispatch(
                                addMessage(
                                    new ImageMessage().fromJson(res.data.responses[index], res.data.context)
                                )
                            )
                    }
                }
                
            })
            .catch(err => {
                console.log(err);
                dispatch(
                    errorMessage(
                        new ErrorMesage({error: err.message, context:message.context})
                    )
                )
            })
}
