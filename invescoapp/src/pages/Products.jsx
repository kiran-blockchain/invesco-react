import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductReducer";

const Products = () => {
     const products = useSelector(x=>x.products);
     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div className="container mt-5">
            <h6><ProductList list ={products.list}/></h6>
        </div>)


};
export default Products;
