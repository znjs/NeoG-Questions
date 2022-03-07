import tw from "tailwind-styled-components";
import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "./pages/Button";
import LocalStorage from "./pages/LocalStorage";
import WishList from "./pages/WishList";
import ApiCall from "./pages/ApiCall";
import Test from "./pages/Test";

function App() {
  return (
    <div className="bg-blue-800 text-center text-white">
      {/* <Button /> */}
      {/* <LocalStorage /> */}
      {/* <WishList /> */}
      <ApiCall />
      {/* <Test /> */}
    </div>
  );
}
export default App;
