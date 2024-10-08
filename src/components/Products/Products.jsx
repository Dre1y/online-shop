import React, { useEffect, useState } from "react";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Produts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("motorola").then((resp) => {
      setProducts(resp);
    });
  }, []);

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}

export default Produts;
