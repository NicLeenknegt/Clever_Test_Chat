export interface MessageType {
    renderType:string,
    context?:any
}

export interface ChatState {
    messages:MessageType[],
    loading:boolean,
    error:boolean
}

export const ADD_MESSAGE = "ADD_MESSAGE";
export const LOADING_MESSAGE = "LOADING_MESSAGE";
export const ERROR_MESSAGE = "ERROR_MESSAGE"

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

export type MessageActionTypes = addMessageAction | loadingMessageAction | errorMessageAction