import * as testSaga from './testSaga'
import * as entriesSaga from './entriesSaga'
import * as deleteEntrySaga from './entriesSagaDeletion'
export function initSagas(sagaMiddleware){
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(deleteEntrySaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}