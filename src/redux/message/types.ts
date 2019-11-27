import { Recommendation } from "../../domain/Recommendation/Recommendation";

export interface MessageType {

    renderType: string,
    context?: any,
    index?:number
}

export interface ChatState {
    messages: MessageType[],
    selectedMessage: MessageType,
    inputMessage: string | undefined,
    selectedTag: string | undefined,
    loading: boolean,
    error: boolean,
    isTesting: boolean,
    productsPerPage: number,
    pagination: number,
    maxPages: number,
    recommendations: Recommendation[],
    questionFlow:string[]
}

export const ADD_MESSAGE = "ADD_MESSAGE";
export const LOADING_MESSAGE = "LOADING_MESSAGE";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SELECT_MESSAGE = "SELECT_MESSAGE";
export const SELECT_TAG = "SELECT_TAG";
export const SET_INPUT = "SET_INPUT";
export const SET_TO_INITIAL_STATE = "SET_TO_INITIAL_STATE";
export const IS_TESTING = "IS_TESTING";
export const FORWARD_PAGINATION = "FORWARD_PAGINATION";
export const BACKWARD_PAGINATION = "BACKWARD_PAGINATION";
export const SET_MAX_PAGES = "SET_MAX_PAGES";
export const SET_PRODUCTS_PER_PAGE = "SET_PRODUCTS_PER_PAGE";
export const SET_RECOMMENDATIONS = "SET_RECOMMENDATIONS";
export const SET_QUESTION_FLOW = "SET_QUESTION_FLOW";

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

interface selectMessageAction {
    type: typeof SELECT_MESSAGE,
    payload: MessageType
}

interface selectTagAction {
    type: typeof SELECT_TAG,
    payload: string
}

interface setInput {
    type: typeof SET_INPUT,
    payload: string
}

interface setToInitialState {
    type: typeof SET_TO_INITIAL_STATE,
    payload: undefined
}
interface isTesting {
    type: typeof IS_TESTING,
    payload: undefined
}

interface forwardPagination {
    type: typeof FORWARD_PAGINATION,
    payload: undefined
}

interface backwardPagination {
    type: typeof BACKWARD_PAGINATION,
    payload: undefined
}

interface setMaxPages {
    type: typeof SET_MAX_PAGES,
    payload: number
}

interface setProductsPerPage {
    type: typeof SET_PRODUCTS_PER_PAGE,
    payload: number
}

interface setRecommendations {
    type: typeof SET_RECOMMENDATIONS,
    payload: Recommendation[]
}

interface setQuestionFlow {
    type: typeof SET_QUESTION_FLOW,
    payload: string[]
}

export type MessageActionTypes = addMessageAction
    | loadingMessageAction
    | errorMessageAction
    | selectMessageAction
    | selectTagAction
    | setInput
    | setToInitialState
    | isTesting
    | forwardPagination
    | backwardPagination
    | setMaxPages
    | setProductsPerPage
    | setRecommendations
    | setQuestionFlow