// initial state
// action method
// reducer
import { createSlice } from "@reduxjs/toolkit";
const CounterReducer = createSlice({
    //name of the reducer
    name: "counter",
    //default state
    initialState: {
        count: 1000
    },
    reducers: {
        //action method
        increment: (state, action) => {
            return {...state,count:state.count+1}
        },
        decrement: (state, action) => {
            return {...state,count:state.count-1}
        },
        reset: (state, action) => {
            return {...state,count:1000}
        }
    }
});
export const { increment,decrement,reset } = CounterReducer.actions;
export default CounterReducer.reducer