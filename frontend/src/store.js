import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./features/productListSlice";


const reducers = {
    products_list: productListSlice
}




const store = configureStore({
    reducer: reducers,
});


export default store;

