import {counter} from './home/Reducer'
import { createStore, combineReducers } from 'redux'

export default createStore(
    combineReducers({
        counter
    })
);