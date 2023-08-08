import {take} from 'redux-saga/effects'

export function* testSaga(){
    while(1){
        console.log("Starting saga")
        yield take('TEST_MESSAGE')
        console.log("Finish saga")
    }
    
}

export function* count(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}