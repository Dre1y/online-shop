import React, { useContext, useState } from "react";

import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue("");
    setLoading(false);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search__button">
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchBar;
