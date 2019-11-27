import { MessageType, ADD_MESSAGE, MessageActionTypes, LOADING_MESSAGE, ERROR_MESSAGE, SELECT_MESSAGE, SELECT_TAG, SET_INPUT, SET_TO_INITIAL_STATE, IS_TESTING, FORWARD_PAGINATION, BACKWARD_PAGINATION, SET_MAX_PAGES, SET_PRODUCTS_PER_PAGE, SET_RECOMMENDATIONS, SET_QUESTION_FLOW } from './types'
import { Recommendation } from '../../domain/Recommendation/Recommendation'

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

export function selectTag(tag:string):MessageActionTypes {
    return {
        type: SELECT_TAG,
        payload: tag
    }
}

export function setInput(input:string):MessageActionTypes {
    return {
        type: SET_INPUT,
        payload:input
    }
}

export function setToInitialState():MessageActionTypes {
    return {
        type:SET_TO_INITIAL_STATE,
        payload:undefined
    }
}

export function isTesting():MessageActionTypes {
    return {
        type:IS_TESTING,
        payload:undefined
    }
}

export function forwardPagination():MessageActionTypes {
    return {
        type:FORWARD_PAGINATION,
        payload:undefined
    }
}

export function backwardPagination():MessageActionTypes {
    return {
        type:BACKWARD_PAGINATION,
        payload:undefined
    }
}

export function setMaxPages(max:number):MessageActionTypes {
    return {
        type:SET_MAX_PAGES,
        payload:max
    }
}

export function setProductsPerPage(productsPerPage:number):MessageActionTypes {
    return {
        type:SET_PRODUCTS_PER_PAGE,
        payload:productsPerPage
    }
}

export function setRecommendations(recommendations:Recommendation[]):MessageActionTypes {
    return {
        type: SET_RECOMMENDATIONS,
        payload:recommendations
    }
}

export function setQuestionFlow(quesionFlow:string[]):MessageActionTypes {
    return {
        type:SET_QUESTION_FLOW,
        payload:quesionFlow
    }
}