import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default appStore;

// This is the way of creating Store by using reduxjs/toolkit