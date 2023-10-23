import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";


export default configureStore({
    reducer:{
        counter:CounterReducer,
        //add more if you have any 
    }
})