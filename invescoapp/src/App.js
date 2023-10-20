
import { useState } from "react";
import { AppRoutes } from "./AppRoutes";
import Header from "./components/Header";
import { HeaderConfig } from "./config/header";
import { CartContext } from "./providers/CartProvider";
import { useTitle } from "./hooks/useTitle";
import { Parent } from "./components/MemoDemo";
//Every component should start with capital letter
const App = () => {
  //every component must have a return statement
  //it should return only only root tag
  const [itemsInCart, setCartItems] = useState([]);
  const {setTitle} = useTitle()
  const addItemToCart = (item) => {
    
    setCartItems([...itemsInCart, item]);
    setTitle(itemsInCart.length+1);
  };
  const removeFromCart = (item) => {
    setCartItems([...itemsInCart, item]);
  };
  return (
    <div>
      <CartContext.Provider value={{
         addToCart: addItemToCart,
         cartItems: itemsInCart ,
        removeFromCart:removeFromCart}}
         >
        <Header config={HeaderConfig} />
        <AppRoutes />
        {/* <Parent/> */}
      </CartContext.Provider>
    </div>
  )
}
//every component must be exported.
export default App;