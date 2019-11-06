import { SELECT_TAG, SET_INPUT, NLPType, NLPActionTypes } from './types'

export function selectTag(nlp:NLPType):NLPActionTypes {
    return {
        type: SELECT_TAG,
        payload: nlp
    }
}

export function setInput(nlp:NLPType):NLPActionTypes {
    return {
        type: SET_INPUT,
        payload: nlp
    }
}