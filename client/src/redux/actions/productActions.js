import axios from "axios";
import * as actionTypes from '../constants/productConstant.js';

const URL = 'http://localhost:8000';

// Assuming you're using Redux, you need to pass `dispatch` as an argument to your action function
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data }); // Remove quotes around action type
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message }); // Remove quotes around action type
    }
};


export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}