import {take} from 'redux-saga/effects'
import entriesTypes from '../actions/entries.actions'
export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES)
    console.log('entries saga')
}