import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

const Products = () => {
    //Create state object
    const [productList, setProductList] = useState({});
    
    const url = "https://fakestoreapi.com/products";

    // steps to bind the data on the loading of component
    //1. useEffect
    useEffect(() => {
        //2. let us fetch the data by defining a function
        const fetchData = async () => {
            try {
             let result = await axios.get(url);
             //update the state.
             setProductList(result.data);
            } catch (ex) {
                console.log(ex);
            }
        };
        //call the function.
        fetchData();

    }, [])

    return (
        <div className="container mt-5">
            <h6><ProductList list ={productList}/></h6>
        </div>)


};
export default Products;
