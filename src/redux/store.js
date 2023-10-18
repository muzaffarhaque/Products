import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
const store=configureStore({
    reducer:{
        caart:CartSlice,
    }
})
export default store;