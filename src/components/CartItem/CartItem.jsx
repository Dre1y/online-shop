/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";

import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItemFromCart = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-tittle">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItemFromCart}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
