import { UserTextMessage } from "../../domain/Messages/TextMessage";

export interface MessageType {

    renderType:string,
    context?:any
}

export interface ChatState {
    messages:MessageType[],
    selectedMessage:MessageType,
    inputMessage:UserTextMessage | undefined,
    selectedTag:string | undefined,
    loading:boolean,
    error:boolean
} 

export const ADD_MESSAGE = "ADD_MESSAGE";
export const LOADING_MESSAGE = "LOADING_MESSAGE";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SELECT_MESSAGE = "SELECT_MESSAGE";
export const SELECT_TAG = "SELECT_TAG";

interface addMessageAction {
    type: typeof ADD_MESSAGE,
    payload: MessageType
}

interface loadingMessageAction {
    type: typeof LOADING_MESSAGE,
    payload: MessageType
}

interface errorMessageAction {
    type: typeof ERROR_MESSAGE,
    payload: MessageType
}

interface selectMessageAction {
    type: typeof SELECT_MESSAGE,
    payload: MessageType
}

interface selectTagAction {
    type: typeof SELECT_TAG,
    payload: string
}

export type MessageActionTypes = addMessageAction | loadingMessageAction | errorMessageAction | selectMessageAction | selectTagAction