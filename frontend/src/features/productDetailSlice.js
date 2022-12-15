import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { showErrorMessage } from "./commonSlice";

const initialState = {
    data : {
        reviews: [],
    },
    loading: true,
}

export const productDetailSlice = createSlice({
    name: 'product_detail',
    initialState,
    reducers:{
        get_product_detail_request: (state, action) => {
            state.loading = true
        },
        get_product_detail : (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        reset:(state) =>{
            state.loading = false
        }
    },
});

export const getProductDetailAsync = (slug) => async (dispatch) => {
    try{
        dispatch(get_product_detail_request())
        const response = await axios.get(`/api/product/detail/${slug}`);
        dispatch(get_product_detail(response.data));
    } catch(err){
        dispatch(showErrorMessage(JSON.parse(err.response.data)))
        dispatch(reset())
    }
};

export default productDetailSlice.reducer
export const { get_product_detail_request, get_product_detail, reset } = productDetailSlice.actions