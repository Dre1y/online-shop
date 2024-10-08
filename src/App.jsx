import React from "react";
import Header from "./components/Header/Header";
import Produts from "./components/Products/Products";
import Prodiver from "./context/Provider";

function App() {
  return (
    <div>
      <Prodiver>
        <Header />
        <Produts />
      </Prodiver>
    </div>
  );
}

export default App;
