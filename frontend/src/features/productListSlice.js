import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    data: [],
    loading: true,
    error_: 0
}

export const productListSlice = createSlice({
    name: "products_list",
    initialState: initialState,
    reducers: {
        get_products_list: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        error_throw: (state, action) => {
            console.log(action.payload);
            state.error_ = action.payload
            state.loading = false
        }
    },
})


export const getProductListAsync = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/products');
        dispatch(get_products_list(response.data));
    } catch (err) {
        dispatch(error_throw(err.response.data))
        // throw new Error(err);
    }
};



export default productListSlice.reducer
// export const showProducts = (state) => state.products_list.data;
// export const loading = (state) => state.products_list.loading;
// export const error_ = (state) => state.products_list.error_;

export const { get_products_list, error_throw } = productListSlice.actions