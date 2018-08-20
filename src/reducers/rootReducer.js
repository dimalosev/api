import {combineReducers} from 'redux';
import {fetchReducer} from './fetchReducer';
import {selectReducer} from './selectReducer';
import {registrationReducer} from './registrationReducer';

export default combineReducers({
    fetchReducer,
    selectReducer,
    registrationReducer
});