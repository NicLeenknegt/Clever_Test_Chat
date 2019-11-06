import { ADD_MESSAGE,MessageType, ChatState, MessageActionTypes, LOADING_MESSAGE, ERROR_MESSAGE, SELECT_MESSAGE } from './types'
import { UserTextMessage } from '../../domain/Messages/TextMessage'

const initialState:ChatState = {
    messages: [],
    selectedMessage: new UserTextMessage,
    loading: false,
    error: false
}

export default function(state = initialState, action:MessageActionTypes):ChatState {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType != "LOADING"), action.payload],
                loading: false,
                error: false,
                selectedMessage: action.payload
            }
        }
        case LOADING_MESSAGE: {
            return {
                messages: [...state.messages, action.payload],
                loading: true,
                error: false,
                selectedMessage: state.selectedMessage
            }
        }
        case ERROR_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType != "LOADING"), action.payload],
                loading: false,
                error: true,
                selectedMessage: action.payload
            }
        }
        case SELECT_MESSAGE: {
            return {
                messages: state.messages,
                loading: false,
                error: false,
                selectedMessage: action.payload
            }
        }
        default:
            return state
    } 
}