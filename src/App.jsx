import React from "react";
import Header from "./components/Header/Header";
import Produts from "./components/Products/Products";
import Prodiver from "./context/Provider";
import Cart from "./components/Cart/Cart";
import FavoriteProducts from "./components/FavoriteProducts/FavoriteProducts";

function App() {
  return (
    <div>
      <Prodiver>
        <Header />
        <Produts />
        <FavoriteProducts />
        <Cart />
      </Prodiver>
    </div>
  );
}

export default App;
