import {applyMiddleware, createStore, combineReducers} from 'redux'
import entriesReducer from '../reducers/entries.reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import modalsReducer from '../reducers/modals.reducers'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer,
        }),
        composeWithDevTools((applyMiddleware(...middlewares)))
    )
    
}
export default configureStore
