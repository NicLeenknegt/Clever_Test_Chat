import { ADD_MESSAGE, ChatState, MessageActionTypes, LOADING_MESSAGE, ERROR_MESSAGE, SELECT_MESSAGE, SELECT_TAG, SET_INPUT, SET_TO_INITIAL_STATE, IS_TESTING, FORWARD_PAGINATION, BACKWARD_PAGINATION, SET_MAX_PAGES, SET_PRODUCTS_PER_PAGE, SET_RECOMMENDATIONS, SET_QUESTION_FLOW } from './types'
import { UserTextMessage } from '../../domain/Messages/TextMessage'

const initialState: ChatState = {
    messages: [],
    selectedMessage: new UserTextMessage(),
    inputMessage: undefined,
    selectedTag: undefined,
    loading: false,
    error: false,
    isTesting: true,
    productsPerPage:10,
    pagination:1,
    maxPages:0,
    recommendations: [],
    questionFlow:[]
}

export default function (state = initialState, action: MessageActionTypes): ChatState {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType !== "LOADING"), action.payload],
                inputMessage: (action.payload.renderType === "USER_TEXT") ? (action.payload as UserTextMessage).messages[0].text : state.inputMessage,
                selectedTag: undefined,
                loading: false,
                error: false,
                selectedMessage: action.payload,
                isTesting: state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
            }
        }
        case LOADING_MESSAGE: {
            return {
                messages: [...state.messages, action.payload],
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag,
                loading: true,
                error: false,
                selectedMessage: state.selectedMessage,
                isTesting: state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow

            }
        }
        case ERROR_MESSAGE: {
            return {
                messages: [...state.messages.filter((message) => message.renderType !== "LOADING"), action.payload],
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag,
                loading: false,
                error: true,
                selectedMessage: action.payload,
                isTesting: state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
                
            }
        }
        case SELECT_MESSAGE: {
            return {
                messages: state.messages,
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag,
                loading: false,
                error: false,
                selectedMessage: action.payload,
                isTesting: state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow

            }
        }
        case SELECT_TAG: {
            return {
                messages: state.messages,
                inputMessage: state.inputMessage,
                selectedTag: action.payload,
                loading: false,
                error: false,
                selectedMessage: state.selectedMessage,
                isTesting: state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
            }
        }
        case SET_INPUT: {
            return {
                messages: state.messages,
                inputMessage: action.payload,
                selectedTag: undefined,
                loading: false,
                error: false,
                selectedMessage: state.selectedMessage,
                isTesting: state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
            }
        }
        case SET_TO_INITIAL_STATE: {
            return {
                messages: [],
                selectedMessage: new UserTextMessage,
                inputMessage: undefined,
                selectedTag: undefined,
                loading: false,
                error: false,
                isTesting: state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
            }
        }
        case IS_TESTING: {
            return  {
                messages: state.messages,
                selectedMessage: state.selectedMessage,
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag,
                loading: state.loading,
                error: state.loading,
                isTesting: !state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
            }
        }
        case FORWARD_PAGINATION: {
            let newState = {...state}
            newState.pagination++;
            if (newState.pagination > newState.maxPages)
                newState.pagination = 1
            return newState
        }
        case BACKWARD_PAGINATION: {
            let newState = {...state}
            newState.pagination--;
            if (newState.pagination < 1)
                newState.pagination = newState.maxPages
            return newState
        }
        case SET_MAX_PAGES: {
            return  {
                messages: state.messages,
                selectedMessage: state.selectedMessage,
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag,
                loading: state.loading,
                error: state.loading,
                isTesting: !state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:action.payload,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
            }
        }
        case SET_PRODUCTS_PER_PAGE: {
            return  {
                messages: state.messages,
                selectedMessage: state.selectedMessage,
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag,
                loading: state.loading,
                error: state.loading,
                isTesting: !state.isTesting,
                productsPerPage: action.payload,
                pagination:0,
                maxPages:state.maxPages,
                recommendations: state.recommendations,
                questionFlow:state.questionFlow
            }
        }
        case SET_RECOMMENDATIONS: {
            return  {
                messages: state.messages,
                selectedMessage: state.selectedMessage,
                inputMessage: state.inputMessage,
                selectedTag: state.selectedTag,
                loading: state.loading,
                error: state.loading,
                isTesting: !state.isTesting,
                productsPerPage: state.productsPerPage,
                pagination:state.pagination,
                maxPages:state.maxPages,
                recommendations: action.payload,
                questionFlow:state.questionFlow
            }
        }
        case SET_QUESTION_FLOW:  {
            let newState = {...state}
            newState.questionFlow = action.payload
            return newState
        }
        default:
            return state
    }
}