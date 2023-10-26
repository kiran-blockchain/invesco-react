import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('fetchProducts',async()=>{
 try{
    const url="https://fakestoreapi.com/products"
    const result = await axios.get(url);
    return result.data;
 } 
 catch(ex){
    return "Error in Fetching products";
 } 
});

const ProductReducer = createSlice({
    name:"products",
    initialState:{
        isLoading:false,
        hasError:null,
        list:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            return {...state,hasError:null,isLoading:true,list:[]}
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return {...state,hasError:null,isLoading:false,list:action.payload}
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            return {...state,hasError:true,isLoading:false,list:[]}
        })
    }
})
export default ProductReducer.reducer;