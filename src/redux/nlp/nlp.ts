
import { NLPState, NLPActionTypes, SELECT_TAG, SET_INPUT } from './types'

const initialState:NLPState = {
    input: "",
    selectedTag: undefined
}

export default function(state = initialState, action:NLPActionTypes):NLPState {
    switch(action.type) {
        case SELECT_TAG: {
            return {
                input:state.input,
                selectedTag: action.payload.tag
            }
        }
        case SET_INPUT: {
            return {
                input: action.payload.input,
                selectedTag:undefined
            }
        }
        default:
            return state
    }
}