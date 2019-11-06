export interface NLPType {
    input?:string,
    tag?:string
}

export interface NLPState {
    input:string | undefined,
    selectedTag:string | undefined
}

export const SELECT_TAG = "SELECT_TAG";
export const SET_INPUT = "SET_INPUT";

interface selectTagAction {
    type: typeof SELECT_TAG,
    payload: NLPType
}

interface setInputAction {
    type: typeof SET_INPUT,
    payload: NLPType
}

export type NLPActionTypes = selectTagAction | setInputAction