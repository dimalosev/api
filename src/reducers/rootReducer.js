import {combineReducers} from 'redux';
import {fetchReducer} from './fetchReducer';
import {selectReducer} from './selectReducer';

export default combineReducers({
    fetchReducer,
    selectReducer
});