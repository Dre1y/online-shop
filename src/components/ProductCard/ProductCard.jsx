/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import "./ProductCard.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;
  const { cartItems, setCartItems, favoriteItems, setFavoriteItems } =
    useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);
  const handleFavoriteItem = () => setFavoriteItems([...favoriteItems, data]);

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <FaShoppingCart />
      </button>

      <button
        type="button"
        className="button__favorite-item"
        onClick={handleFavoriteItem}
      >
        <MdOutlineFavoriteBorder />
      </button>
    </section>
  );
}

export default ProductCard;
