import {take, put, delay, call, fork, takeEvery} from 'redux-saga/effects'
function double(number){
    return number*2
}

export function* testSaga(){
    while(1){
        console.log('Starting saga') // đầu tiên vô chạy cái này do được gọi bên index saga
        const state = yield take('TEST_MESSAGE') // chạy tới đây thì dừng đi tới dispatchTest chạy put
        const a = yield call (double,2)
        console.log(a)
        const b = yield double(3)
        console.log(b)
        console.log("Finish saga", state)
    }
    
}

export function* dispatchTest(){
    let index = 0
    while (1) {
       yield delay(500)
       yield put({type: 'TEST_MESSAGE3', payload: index}) // TEST_MESSAGE3 được gọi thì index + lên
       index++
    }
}

export function* testSagaTakeEvery(){
    const{payload} = yield takeEvery('TEST_MESSAGE3', testSagaTakeEveryProcess) // takeEvery này ko có blocking, lắng nghe TEST_MESSAGE3 và gọi testSagaTakeEveryProcess rồi đi
    console.log(`finish take every index ${payload}`) // show cái log finish này ra
}

export function* testSagaTakeEveryProcess({payload}){
    console.log(`Starting process for index ${payload}`)
    yield delay(3000)
    console.log(`Ending process for index ${payload}`)


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









