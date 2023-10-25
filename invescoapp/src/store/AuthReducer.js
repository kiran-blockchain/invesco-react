import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
/// extra reducers
export const LoginAction = createAsyncThunk("login", async (payload) => {
    try {
        const data={
            username:payload.Username,
            password:payload.Password
        }
        const result = await axios.post("https://fakestoreapi.com/auth/login", data);
        return result.data;
    }
    catch(ex){
        throw ex;
    }
});
const AuthReducer = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        data: "",
        error: null,
        isAuthenticated: false
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginAction.pending,(state,action)=>{
            return{...state,isLoading:true}
        })// in case of progress
        builder.addCase(LoginAction.fulfilled,(state,action)=>{
            if(action.payload&& action.payload.token){
                return{...state,isLoading:false,data:action.payload.token,isAuthenticated:true}
            }
            else{
                return{...state,isLoading:false,error:"user is not Authenticated"}
            }
            
        })//incase of sucess
        builder.addCase(LoginAction.rejected,(state,action)=>{
            return{...state,isLoading:false,error:"user is not Authenticated"}

        })// inc case of failure
    }
});

export default AuthReducer.reducer;