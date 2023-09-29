import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/productsSlice";
import cartSlice  from "./Slice/cartSlice";

const store=configureStore({
    reducer:{
        products:productsReducer,
        cart:cartSlice
    }
})
export default store;