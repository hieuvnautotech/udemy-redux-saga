import {take, call, put, fork} from 'redux-saga/effects'
import entriesTypes from '../actions/entries.actions'
import axios from 'axios'
import types from '../actions/entries.actions'
import {populateEntries, populateEntryDetails} from '../actions/entries.actions'

 
export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES)
    console.log('entries saga')
    const {data} = yield call (axios, 'http://localhost:3002/entries')
    // const result = yield call (axios, 'http://localhost:3002/entries')
    // console.log(result)
    yield put(populateEntries(data))
    // yield put({type: types.POPULATE_ENTRIES, payload: result.data})

}

export function* getEntryDetails(id){
    // console.log(`got the id ${id}`)
    const {data} = yield call (axios, `http://localhost:3002/values/${id}`)
    console.log(data)
    yield put(populateEntryDetails(id, data))
    // yield put({type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: {id, entry:data}})

}

export function* getAllEntriesDetails(){
    const {payload} = yield take(entriesTypes.POPULATE_ENTRIES)
    for(let index = 0; index<payload.length; index++){
        const entry = payload[index]
        yield fork(getEntryDetails, entry.id)
    }
   
}