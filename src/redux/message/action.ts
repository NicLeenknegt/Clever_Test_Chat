import { MessageType, ADD_MESSAGE, MessageActionTypes, LOADING_MESSAGE, ERROR_MESSAGE, SELECT_MESSAGE } from './types'

export function addMessage(message:MessageType):MessageActionTypes {
    return {
        type: ADD_MESSAGE,
        payload:message
    }
}

export function loadingMessage(message:MessageType):MessageActionTypes {
    return {
        type:LOADING_MESSAGE,
        payload:message
    }
}

export function errorMessage(message:MessageType):MessageActionTypes {
    return {
        type: ERROR_MESSAGE,
        payload: message
    }
}

export function selectMessage(message:MessageType):MessageActionTypes {
    return {
        type: SELECT_MESSAGE,
        payload: message
    }
} 