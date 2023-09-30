import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/productsSlice";
import cartSlice  from "./Slice/cartSlice";
import pathname  from "./Slice/pathname";
import pathnameSlice from './Slice/pathname';
import userSlice from "./Slice/userSlice";

const store=configureStore({
    reducer:{
        products:productsReducer,
        cart:cartSlice,
        pathname:pathnameSlice,
        user:userSlice
    }
})
export default store;