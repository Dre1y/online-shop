import React, { useContext, useEffect } from "react";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

function Produts() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("product").then((resp) => {
      setProducts(resp);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}

export default Produts;
