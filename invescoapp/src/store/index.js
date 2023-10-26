import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import CartReducer from "./CartReducer";
import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        auth:AuthReducer,
        products:ProductReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})