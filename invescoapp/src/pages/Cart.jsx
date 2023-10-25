import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";

const Cart = () => {
    //const { cartItems } = useContext(CartContext)
    const cart = useSelector(x=>x.cart);

    return (
        <div className="container mt-5">
            <ProductList list={cart.cartItems} />
        </div>
    )
}

export default Cart;