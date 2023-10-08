import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/cartSlice";
// import pathname from "./Slice/pathname";
import pathnameSlice from './Slice/pathname';
import userSlice from "./Slice/userSlice";
import categorySlice from "./Slice/categorySlice";
import productsSlice from "./Slice/productsSlice";
import favoriteSlice from './Slice/favorite';
import orderSlice from "./Slice/orderSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        pathname: pathnameSlice,
        user: userSlice,
        category: categorySlice,
        favorite:favoriteSlice,
        order:orderSlice
    }
})
export default store;