import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { json } from "react-router-dom";

const initialState = {
    cartItems: [],
    total_price: 0,
    total_qty: 0,
    loading: true,
    error_: 0
}

export const cartItemsSlice = createSlice({
    name: 'cart_items',
    initialState,
    reducers: {
        get_cart_items_request: (state, action) => {
            state.loading = true
        },
        get_cart_items: (state, action) => {
            // state.data = action.payload
            state.loading = false
        },
        add_cart_item: (state, action) => {
            const item = action.payload
            const itemExists = state.cartItems.find(x => x.slug === item.slug)
            if (itemExists) {
                state.cartItems = state.cartItems.map(x => x.slug === item.slug ? item : x)
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            state.total_qty = 0
            state.total_price = 0
            state.cartItems.map(x => {
                state.total_qty += x.qty
                state.total_price += x.price * x.qty
            });
        },
        error_throw: (state, action) => {
            state.error_ = action.payload
            state.loading = false
        }
    },
});

export const getCartItemsAsync = (slug) => async (dispatch) => {
    try {
        dispatch(get_cart_items_request())
        const response = await axios.get(`/api/product/${slug}`);
        dispatch(get_cart_items(response.data));
    } catch (err) {
        dispatch(error_throw(err.response.data))
    }
};

export const addToCart = (slug, qty) => async (dispatch, getState) => {
    try {
        console.log(slug, 1111, qty);
        const response = await axios.get(`/api/product/basic/${slug}`)
        var data = { ...response.data, qty }
        dispatch(add_cart_item(data))
    } catch (err) {
        console.log(222222222222);
        console.log(err);
        dispatch(error_throw(json.toString(err.response)))
    }
}

export default cartItemsSlice.reducer
export const { get_cart_items_request, get_cart_items, add_cart_item, error_throw } = cartItemsSlice.actions