/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import Test from "./pages/Test";
import Heading from "./pages/Heading";
import Counter from "./pages/Counter";
import BGChange from "./pages/BGChange";
import CharacterCount from "./pages/CharacterCount";
import PasswordMatch from "./pages/PasswordMatch";
import PasswordCheck from "./pages/PasswordCheck";
import ShowPassword from "./pages/ShowPassword";
import MiniFigma from "./pages/MiniFigma";
import AddToCart from "./pages/AddToCart";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
    {/* <Heading /> */}
    {/* <Counter /> */}
    {/* <BGChange /> */}
    {/* <CharacterCount /> */}
    {/* <PasswordMatch /> */}
    {/* <PasswordCheck /> */}
    {/* <ShowPassword /> */}
    {/* <MiniFigma /> */}
    <AddToCart />
  </React.StrictMode>,
  document.getElementById("root")
);
