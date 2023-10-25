import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import CartReducer from "./CartReducer";
import AuthReducer from "./AuthReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        auth:AuthReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})