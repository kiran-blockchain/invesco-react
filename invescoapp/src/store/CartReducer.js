import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addToCart :(state,action)=>{
            //add logic to add items to the cart;
            let cartItems =  state.cartItems;
            cartItems=[...state.cartItems,action.payload];
            return {...state,cartItems:cartItems}
        },
        removeFromCart :(state,action)=>{
        // add requried logic
            let cartItems =  state.cartItems;
            let index = cartItems.findIndex(x=>x.id==action.payload.id);
            cartItems.splice(index,1);
            return {...state,cartItems:cartItems}
        },
        emptyCart :(state,action)=>{
            return {...state,cartItems:[]}
        }
    }
});
export const {addToCart,removeFromCart} = CartReducer.actions
export default CartReducer.reducer;