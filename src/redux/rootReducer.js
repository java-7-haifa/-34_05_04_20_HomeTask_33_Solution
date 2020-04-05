import cartReducer from './cartReducer';
import appReducer from './appReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    cart:cartReducer,
    app:appReducer
});