import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { showErrorMessage, showSuccessMessage } from "./commonSlice";


const initialState = {
    cartItems: [],
    loading: true,   // change
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
            state.cartItems = action.payload
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
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            state.loading = false
        },
        remove_cart_item: (state, action) => {
            console.log(action.payload);
            state.cartItems = state.cartItems.filter(x => x.slug !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            state.loading = false
        },
        increase_cart_qty: (state, action) => {
            const item = state.cartItems.find(x => x.slug === action.payload.slug)
            item.qty = action.payload.qty + 1
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decrease_cart_qty: (state, action) => {
            const item = state.cartItems.find(x => x.slug === action.payload.slug)
            item.qty = action.payload.qty - 1
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        error_throw: (state, action) => {
            state.error_ = action.payload
            state.loading = false
        }
    },
});

export const getCartItemsAsync = () => async (dispatch) => {
    try {
        const items = localStorage.getItem('cartItems')
        console.log(items);
        dispatch(get_cart_items(JSON.parse(items)));
    } catch (err) {
        console.log(err);
        dispatch(showErrorMessage(JSON.parse(err.response.data)))
    }
};

export const addToCart = (slug, qty) => async (dispatch, getState) => {
    try {
        const response = await axios.get(`/api/product/basic/${slug}`)
        var data = { ...response.data, qty }
        dispatch(add_cart_item(data))
    } catch (err) {
        console.log(err);
        dispatch(showErrorMessage(JSON.parse(err.response.data)))
    }
}

export const removeFromCart = (slug) => async (dispatch) => {
    try{
        dispatch(remove_cart_item(slug))
        dispatch(showSuccessMessage("Item removed from cart"))
    } catch (err) {
        console.log(err);
        dispatch(showErrorMessage(JSON.parse(err.response.data)))
    }
}

const getProductStockAsync = (slug) => async (dispatch) => {
    try{
        const response = await axios.get(`/api/product/stock/${slug}`);
        console.log(response.data)
        return response.data
    } catch(err){
        console.log(err);
        dispatch(showErrorMessage(JSON.parse(err.response.data)))
    }
};

export const increaseCartItem = (slug, qty) => async (dispatch) => {
    try{
        const stock = await dispatch(getProductStockAsync(slug))
        console.log(stock);
        if (qty >= stock){
            dispatch(showErrorMessage("Stock count reached"))
        }else{
            dispatch(increase_cart_qty({slug, qty}))
        }
    }catch (err) {
        console.log(err);
        dispatch(showErrorMessage(JSON.parse(err.response.data)))
    }
}

export const decreaseCartItem = (slug, qty) => async (dispatch) => {
    try{
        console.log(slug, qty);
        if (qty <= 1){
            dispatch(showErrorMessage("Cannot decrease quantity beyond 1"))
        }else {
            dispatch(decrease_cart_qty({slug, qty}))
        }
    }catch (err) {
        console.log(err);
        dispatch(showErrorMessage(JSON.parse(err.response.data)))
    }
}

export default cartItemsSlice.reducer
export const { get_cart_items_request, get_cart_items, add_cart_item, remove_cart_item, increase_cart_qty, decrease_cart_qty, error_throw } = cartItemsSlice.actions