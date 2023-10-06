import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice/productsSlice";
import cartSlice  from "./Slice/cartSlice";
import LanguageReducer from './Slice/LanguageSlice'
import filteredListReducer from "./Slice/filteredList";

const store=configureStore({
    reducer:{
        products:productsReducer,
        cart:cartSlice,
        language:LanguageReducer,
        filteredList:filteredListReducer
    }
})
export default store;