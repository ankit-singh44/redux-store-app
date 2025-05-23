import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {add,remove} from  "../Store/cartSlice"

const Product = () => {
  let [products, setProducts] = useState([]);
  let dispatch=useDispatch();

  let handleClick=(product)=>{
    dispatch(add(product))
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(function (res) {
      setProducts(res.data);
    })
  }, []);
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.image}></img>
            <h6>{product.title}</h6>
            <h5>{product.price}$</h5>
            <button className="btn" onClick={()=>handleClick(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
