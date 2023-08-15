import {take, call, put} from 'redux-saga/effects'
import entriesTypes from '../actions/entries.actions'
import axios from 'axios'
import types from '../actions/entries.actions'
export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES)
    console.log('entries saga')
    const result = yield call (axios, 'http://localhost:3002/entries')
    console.log(result)
    yield put({type: types.POPULATE_ENTRIES, payload: result.data})
}