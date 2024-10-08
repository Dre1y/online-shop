import React from "react";
import Header from "./components/Header/Header";
import Produts from "./components/Products/Products";
import Prodiver from "./context/Provider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Prodiver>
        <Header />
        <Produts />
        <Cart />
      </Prodiver>
    </div>
  );
}

export default App;
