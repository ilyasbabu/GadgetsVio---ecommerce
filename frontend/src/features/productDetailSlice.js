import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    data : {
        reviews: [],
    },
    loading: true,
    error_: 0
}

export const productDetailSlice = createSlice({
    name: 'product_detail',
    initialState,
    reducers:{
        get_product_detail : (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        error_throw: (state, action) => {
            state.error_ = action.payload
            state.loading = false
        }
    },
});

export const getProductDetailAsync = (slug) => async (dispatch) => {
    try{
        const response = await axios.get(`/api/product/${slug}`);
        dispatch(get_product_detail(response.data));
    } catch(err){
        dispatch(error_throw(err.response.data))
    }
};

export default productDetailSlice.reducer
export const { get_product_detail, error_throw } = productDetailSlice.actions