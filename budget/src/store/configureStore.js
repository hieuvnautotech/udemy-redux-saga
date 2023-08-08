import {applyMiddleware, createStore, combineReducers} from 'redux'
import entriesReducer from '../reducers/entries.reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import modalsReducer from '../reducers/modals.reducers'
import createSagaMiddleware from 'redux-saga'
import {count, testSaga} from '../sagas/testSaga'
import {initSagas} from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer,
        }),
        composeWithDevTools((applyMiddleware(...middlewares)))
    )
    // sagaMiddleware.run(testSaga)
    // sagaMiddleware.run(count)
    initSagas(sagaMiddleware)
    return store
} 
export default configureStore
