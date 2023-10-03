import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/productsSlice";
import cartSlice from "./Slice/cartSlice";
// import pathname from "./Slice/pathname";
import pathnameSlice from './Slice/pathname';
import userSlice from "./Slice/userSlice";
import categorySlice from "./Slice/categorySlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartSlice,
        pathname: pathnameSlice,
        user: userSlice,
        category: categorySlice
    }
})
export default store;