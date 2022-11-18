import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    data: [],
    loading: true
}

export const productListSlice = createSlice({
    name: "products_list",
    initialState: initialState,
    reducers: {
        get_products_list: (state, action) => {
            state.data = action.payload
            state.loading = false
        }
    }
})


export const getProductListAsync = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/products');
        dispatch(get_products_list(response.data));
    } catch (err) {
        throw new Error(err);
    }
};



export default productListSlice.reducer
export const showProducts = (state) => state.products_list.data;
export const loading = (state) => state.products_list.loading;
export const { get_products_list } = productListSlice.actions