import {take, put, delay} from 'redux-saga/effects'



export function* testSaga(){
    while(1){
        console.log("Starting saga")
        const state = yield take('TEST_MESSAGE')
        console.log("Finish saga", state)
    }
    
}

export function* dispatchTest(){
    while (1) {
       yield delay(10000)
       yield put({type: 'TEST_MESSAGE', payload:1000})
    }
}