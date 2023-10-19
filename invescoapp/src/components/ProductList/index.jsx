import { useContext } from "react";
import "./style.css";
import { CartContext } from "../../providers/CartProvider";
import { useTitle } from "../../hooks/useTitle";
const ProductList = (props) => {
    const{addToCart} = useContext(CartContext);
   
    const list = props.list;
    const buildList = () => {
        if (list && list.length > 0) {
            return list.map((item, index) => {
                return (<div className="col-md-4 d-flex align-items-stretch" key={item.id}>
                    <div class="card mb-3">
                        <img src={item.image} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                            <p class="card-text">
                                <small class="text-body-secondary">
                                    {item.price}
                                </small>
                            </p>
                            <p>
                                <button className="btn btn-primary" onClick={e=>{
                                    addToCart(item);
                                }}>Add to Cart</button>
                            </p>
                        </div>
                    </div>
                </div>
                )
            })

        } else {
            return null;
        }
    }
    return (
        <div className="row">
            {buildList()}
        </div>
    )
};
export default ProductList;