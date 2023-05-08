import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'
import axiosInstance from "../utils/axiosInstance";
import { handleError } from "./commonSlice";

const initialState = {
    data: [],
    brands: [],
    banners: [],
    loading: true,
}

export const homePageSlice = createSlice({
    name: "products_list",
    initialState,
    reducers: {
        get_products_list_request: (state, action) => {
            state.loading = true
        },
        get_products_list: (state, action) => {
            state.data = action.payload.products
            state.brands = action.payload.brands
            state.banners = action.payload.banners
            state.loading = false
        },
        reset: (state) => {
            state.loading = false
            state.data = []
        }
    },
})

export const getProductListAsync = () => async (dispatch) => {
    try {
        dispatch(get_products_list_request());
        const response = await axiosInstance.get('/api/product');
        dispatch(get_products_list(response.data));
    } catch (err) {
        // dispatch(showErrorMessage(JSON.parse(err.response.data)))
        dispatch(handleError(err));
        dispatch(reset())
    }
};

export default homePageSlice.reducer
// export const showProducts = (state) => state.products_list.data;
// export const loading = (state) => state.products_list.loading;
// export const error_ = (state) => state.products_list.error_;
export const { get_products_list_request, get_products_list, reset } = homePageSlice.actions