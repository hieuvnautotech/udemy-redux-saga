import axios from 'axios'
import {take, call, put} from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions'
export function* deleteEntrySaga(){
    while(1){
    const {payload} = yield take(entriesTypes.REMOVE_ENTRY)
        yield call(deleteEntrie, payload.id)
        yield put({type:'REMOVE_ENTRY_RESULT', payload:{id:payload.id}})

    }
}

async function deleteEntrie(id){
    await axios.delete(`http://localhost:3002/entries/${id}`)
    await axios.delete(`http://localhost:3002/values/${id}`)
    // await new Promise((s) => setTimeout(s,3000))
}