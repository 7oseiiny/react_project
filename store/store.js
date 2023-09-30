import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/productsSlice";
import cartSlice  from "./Slice/cartSlice";
import pathname  from "./Slice/pathname";
import pathnameSlice from './Slice/pathname';

const store=configureStore({
    reducer:{
        products:productsReducer,
        cart:cartSlice,
        pathname:pathnameSlice,
    }
})
export default store;