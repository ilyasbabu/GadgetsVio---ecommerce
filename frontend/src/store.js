import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./features/productListSlice";
import productDetailSlice  from "./features/productDetailSlice";


const reducers = {
    products_list: productListSlice,
    product_detail: productDetailSlice,
}




const store = configureStore({
    reducer: reducers,
});


export default store;

