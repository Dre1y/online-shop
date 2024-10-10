import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./CartButton.css";
import AppContext from "../../context/AppContext";

function CartButton() {
  const {
    cartItems,
    isCartVisible,
    setIsCartVisible,
    isFavoritesVisible,
    setIsFavoritesVisible,
  } = useContext(AppContext);

  const handleCartClick = () => {
    if (isFavoritesVisible) {
      setIsFavoritesVisible(false);
    }
    setIsCartVisible(!isCartVisible);
  };

  return (
    <button type="button" className="cart__button" onClick={handleCartClick}>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;
