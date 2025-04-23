import { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  let [products, setProducts] = useState([]);

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
            <button className="btn">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
