import React, { useContext } from "react";

import "./FavoriteProducts.css";
import AppContext from "../../context/AppContext";
import FavoriteProduct from "../FavoriteProduct/FavoriteProduct";

function FavoriteProducts() {
  const { favoriteItems, isFavoritesVisible } = useContext(AppContext);

  return (
    <section
      className={`favorite-products ${
        isFavoritesVisible ? "favorite-products-active" : ""
      }`}
    >
      {favoriteItems.length > 0 ? (
        favoriteItems.map((favoriteItem) => (
          <FavoriteProduct key={favoriteItem.id} data={favoriteItem} />
        ))
      ) : (
        <div className="empty-favorites">Nenhum item favoritado ainda.</div>
      )}
    </section>
  );
}

export default FavoriteProducts;
