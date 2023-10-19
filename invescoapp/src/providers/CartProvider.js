import { createContext } from "react";

export const CartContext = createContext({
    cartItems:[],//data that that children will subscribe to 
    addToCart:()=>{},// a method that will update the data.
    removeFromCart:()=>{}
})