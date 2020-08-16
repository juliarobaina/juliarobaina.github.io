import counterReducer from './counter';
import validationReducer from './validation';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer ,
    validation: validationReducer  
});

export default allReducers;