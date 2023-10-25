import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        totalPrice:0
    },
    reducers:{
        addToCart :(state,action)=>{
            //add logic to add items to the cart;
            let cartItems =  state.cartItems;
            cartItems=[...state.cartItems,action.payload];
            let total =0;
            cartItems.forEach(item=>{
                total+= item.price;
            });
            return {...state,cartItems:cartItems,totalPrice:total}
        },
        removeFromCart :(state,action)=>{
        // add requried logic
            let cartItems =  state.cartItems;
            let newItems = cartItems.filter(x=>x.id!=action.payload.id);
            let total =0;
            newItems.forEach(item=>{
                total+= item.price;
            });
            return {...state,cartItems:newItems,totalPrice:total}
        },
        emptyCart :(state,action)=>{
            return {...state,cartItems:[]}
        }
    }
});
export const {addToCart,removeFromCart} = CartReducer.actions
export default CartReducer.reducer;