import {take, put, delay, call, fork, takeEvery} from 'redux-saga/effects'
function double(number){
    return number*2
}

export function* testSaga(){
    while(1){
        console.log('Starting saga')
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

export function* testSagaTakeEveryProcess({payload}){
    console.log(`Starting process for index ${payload}`)
    yield delay(3000)
    console.log(`Ending process for index ${payload}`)


}


export function* testSagaTakeEvery(){
    const{payload} = yield takeEvery('TEST_MESSAGE3', testSagaTakeEveryProcess)
    console.log(`finish take every index ${payload}`)
}


export function* dispatchTest(){
    let index = 0
    while (1) {
       yield delay(500)
       yield put({type: 'TEST_MESSAGE3', payload: index})
       index++
    }
}

