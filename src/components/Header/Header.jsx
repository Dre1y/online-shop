import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import "./Header.css";
import CartButton from "../CartButton/CartButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
        <FavoriteButton />
      </div>
    </header>
  );
}

export default Header;
