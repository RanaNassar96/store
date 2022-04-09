import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer'
import incomingReducers from './incomingReducers'


const rootReducer = combineReducers({
    products: productsReducer,
    users: usersReducer,
    incoming: incomingReducers
});

export default  rootReducer