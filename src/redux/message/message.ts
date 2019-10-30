import { ADD_MESSAGE, ChatState, MessageActionTypes, LOADING_MESSAGE, ERROR_MESSAGE } from './types'

const initialState:ChatState = {
    messages: [],
    loading: false,
    error: false
}

export default function(state = initialState, action:MessageActionTypes):ChatState {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType != "LOADING"), action.payload],
                loading: false,
                error: false
            }
        }
        case LOADING_MESSAGE: {
            return {
                messages: [...state.messages, action.payload],
                loading: true,
                error: false
            }
        }
        case ERROR_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType != "LOADING"), action.payload],
                loading: false,
                error: true
            }
        }
        default:
            return state
    } 
}