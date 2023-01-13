import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
    <Header />
      <h2>Let's get started!</h2>
      <Meals></Meals>
    </>
  );
}

export default App;
