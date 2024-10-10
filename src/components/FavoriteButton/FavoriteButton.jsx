import React, { useContext } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import "./FavoriteButton.css";
import AppContext from "../../context/AppContext";

function FavoriteButton() {
  const {
    isFavoritesVisible,
    setIsFavoritesVisible,
    isCartVisible,
    setIsCartVisible,
  } = useContext(AppContext);

  const handleFavoriteClick = () => {
    if (isCartVisible) {
      setIsCartVisible(false);
    }
    setIsFavoritesVisible(!isFavoritesVisible);
  };

  return (
    <button
      type="button"
      className="favorite-button"
      onClick={handleFavoriteClick}
    >
      <MdOutlineFavoriteBorder />
    </button>
  );
}

export default FavoriteButton;
