import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./features/productListSlice";
import productDetailSlice  from "./features/productDetailSlice";
import cartItemsSlice from "./features/cartSlice";
import commonSlice from "./features/commonSlice";

const reducers = {
    products_list: productListSlice,
    product_detail: productDetailSlice,
    cart_items: cartItemsSlice,
    commons: commonSlice
}

const store = configureStore({
    reducer: reducers,
});

export default store;

