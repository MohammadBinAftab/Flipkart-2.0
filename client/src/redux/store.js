import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { thunk } from 'redux-thunk';
import { getProductReducer, getProductDetailsReducer } from './reducers/productReducer.js';
import { cartReducer} from './reducers/cartReducer';


const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductsDetails: getProductDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
