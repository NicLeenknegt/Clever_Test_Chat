import {combineReducers, createStore, applyMiddleware} from 'redux'
import Message from './message/message'
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    message:Message
});

export type AppState =  ReturnType<typeof rootReducer>;

export default function configureStore() {

    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares)

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}