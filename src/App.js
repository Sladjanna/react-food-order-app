import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart>
        <Header />
        <main>
          <Meals></Meals>
        </main>
      </Cart>
    </>
  );
}

export default App;
