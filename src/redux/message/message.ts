import { ADD_MESSAGE,MessageType, ChatState, MessageActionTypes, LOADING_MESSAGE, ERROR_MESSAGE, SELECT_MESSAGE, SELECT_TAG } from './types'
import { UserTextMessage } from '../../domain/Messages/TextMessage'

const initialState:ChatState = {
    messages: [],
    selectedMessage: new UserTextMessage,
    inputMessage: undefined,
    selectedTag: undefined,
    loading: false,
    error: false
}

export default function(state = initialState, action:MessageActionTypes):ChatState {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType != "LOADING"), action.payload],
                inputMessage: (action.payload.renderType === "USER_TEXT")?action.payload as UserTextMessage:state.inputMessage,
                selectedTag:undefined ,
                loading: false,
                error: false,
                selectedMessage: action.payload
            }
        }
        case LOADING_MESSAGE: {
            return {
                messages: [...state.messages, action.payload],
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag ,
                loading: true,
                error: false,
                selectedMessage: state.selectedMessage
            }
        }
        case ERROR_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType != "LOADING"), action.payload],
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag ,
                loading: false,
                error: true,
                selectedMessage: action.payload
            }
        }
        case SELECT_MESSAGE: {
            return {
                messages: state.messages,
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag ,
                loading: false,
                error: false,
                selectedMessage: action.payload
            }
        }
        case SELECT_TAG: {
            return {
                messages: state.messages,
                inputMessage: state.inputMessage,
                selectedTag: action.payload ,
                loading: false,
                error: false,
                selectedMessage: state.selectedMessage
            }
        }
        default:
            return state
    } 
}