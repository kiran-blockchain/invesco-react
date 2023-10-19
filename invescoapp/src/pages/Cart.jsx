import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import ProductList from "../components/ProductList";

const Cart = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className="container mt-5">
            <ProductList list={cartItems} />
        </div>
    )
}

export default Cart;