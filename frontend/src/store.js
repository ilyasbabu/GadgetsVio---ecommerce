import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./features/productListSlice";
import productDetailSlice  from "./features/productDetailSlice";
import cartItemsSlice from "./features/cartSlice";


const reducers = {
    products_list: productListSlice,
    product_detail: productDetailSlice,
    cart_items: cartItemsSlice,
}




const store = configureStore({
    reducer: reducers,
});


export default store;

