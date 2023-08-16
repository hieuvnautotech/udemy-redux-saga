import {take, put, delay, call, fork} from 'redux-saga/effects'
function double(number){
    return number*2
}

export function* testSaga(){
    while(1){
        console.log("Starting saga")
        const state = yield take('TEST_MESSAGE')
        const a = yield call (double,2)
        console.log(a)
        const b = yield double(3)
        console.log(b)
        console.log("Finish saga", state)
    }
    
}

function* doNothing(){
    console.log('have been called')
    yield delay(1000)
    console.log('doing nothing')
}

export function* testSagaFork(){
    while(1){
        yield take('TEST_MESSAGE2')
        yield fork(doNothing)
        yield fork(doNothing)
        yield fork(doNothing)
        
    }
}


export function* dispatchTest(){
    while (1) {
       yield delay(5000)
       yield put({type: 'TEST_MESSAGE2', payload:1000})
    }
}

