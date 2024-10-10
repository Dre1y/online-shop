/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import "./FavoriteProduct.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function FavoriteProduct({ data }) {
  const { favoriteItems, setFavoriteItems } = useContext(AppContext);
  const { thumbnail, title, price } = data;

  const handleRemoveFavoriteItem = () => {
    const newFavoriteItems = favoriteItems.filter(
      (item) => item.id !== data.id
    );
    setFavoriteItems(newFavoriteItems);
  };

  return (
    <section className="favorite-product">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="favorite-item-image"
      />

      <div className="favorite-item-content">
        <h3 className="favorite-item-title">{title}</h3>
        <h3 className="favorite-item-price">{formatCurrency(price, "BRL")}</h3>

        <button
          type="button"
          className="button__remove-fav-item"
          onClick={handleRemoveFavoriteItem}
        >
          Remover Item
        </button>
      </div>
    </section>
  );
}

export default FavoriteProduct;
