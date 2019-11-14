import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../index"
import { MessageType } from "./types";
import { LoadingMessage } from '../../domain/Messages/LoadingMessage'
import { ReplyTextMessage, UserTextMessage } from '../../domain/Messages/TextMessage'
import './action'
import { loadingMessage, addMessage, errorMessage, setToInitialState, setRecommendations, setProductsPerPage, setMaxPages } from "./action";
import { ChatService } from "../../services/ChatService"
import { ErrorMesage } from "../../domain/Messages/ErrorMessage";
import { ImageMessage } from "../../domain/Messages/ImageMessage";
import { ButtonMessage } from "../../domain/Messages/ButtonMessage";
import { RecommendationService } from "../../services/RecommendationService";
import { Recommendation } from "../../domain/Recommendation/Recommendation";

export const thunkStartConversation = (
    embedToken: string,
    message: MessageType
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch,getState) => {
    
    dispatch(
        setToInitialState()
    )

    dispatch(
        loadingMessage(
            new LoadingMessage()
        )
    )
    new ChatService()
        .initiateConversation(getState().message.isTesting)
        .then(res => {
            dispatch(
                addMessage(
                    new ReplyTextMessage().fromJson(res.data.responses[0], res.data.context)
                )
            )
        }

        ).catch(err => {
            console.log(err.message)

        }

        )

}

export const thunkSendMessage = (
    message: UserTextMessage
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch,getState) => {
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
        .sendMessage(message,getState().message.isTesting)
        .then(res => {
            for (var index in res.data.responses) {
                switch (res.data.responses[index].messageType) {
                    case "TEXT":
                        dispatch(
                            addMessage(
                                new ReplyTextMessage().fromJson(res.data.responses[index], res.data.context)
                            )
                        )
                        break;
                    case "IMAGE":
                        console.log("IMAGE_CHECK")
                        dispatch(
                            addMessage(
                                new ImageMessage().fromJson(res.data.responses[index], res.data.context)
                            )
                        )
                        break;
                    case "BUTTON":
                        dispatch(
                            addMessage(
                                new ButtonMessage().fromJson(res.data.responses[index], res.data.context)
                            )
                        )
                        break;
                }
            }

        })
        .catch(err => {
            console.log(err);
            dispatch(
                errorMessage(
                    new ErrorMesage({ error: err.message, context: message.context })
                )
            )
        })
}

export const thunkGetRecommendation = ():ThunkAction<void, AppState, null, Action<string>> => async (dispatch,getState) => {

    new RecommendationService()
        .getRecommendation(getState().message.productsPerPage, getState().message.pagination)
        .then( res => {
            console.log(res)
            var recommendations:Recommendation[] = []
            res.recommendations.forEach((element:any) => {
                recommendations.push(new Recommendation().fromJson(element))
            });
            dispatch(
                setRecommendations(
                    recommendations
                )
            )
            dispatch(
                setMaxPages(
                    res.maxPages
                )
            )
        })
        .catch(err => {
            console.log(err);
        })
}
