/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AppContext from "./AppContext";

function Prodiver({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    favoriteItems,
    setFavoriteItems,
    isFavoritesVisible,
    setIsFavoritesVisible,
    isChatOpen,
    setIsChatOpen,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Prodiver;
