import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./features/homePageSlice";
import productDetailSlice from "./features/productDetailSlice";
import loginSlice from "./features/loginSlice";
import cartItemsSlice from "./features/cartSlice";
import commonSlice from "./features/commonSlice";

const reducers = {
    products_list: homePageSlice,
    product_detail: productDetailSlice,
    cart_items: cartItemsSlice,
    commons: commonSlice,
    login: loginSlice,
}

const store = configureStore({
    reducer: reducers,
});

export default store;

