import tw from "tailwind-styled-components";
import React, { useState, useEffect } from "react";

function LocalStorage() {
  const [inputText, setInputText] = useState("");
  function clickHandler() {
    localStorage.setItem("inputText", inputText);
    localStorage.setItem("itemArray", JSON.stringify(listItems));
  }
  useEffect(() => {
    console.log(listItems);
    console.log(localStorage);
    setInputText(localStorage.getItem("inputText"));
  }, []);
  const listItems = [
    { id: 2, name: "item1", qty: 24 },
    { id: 22, name: "item2", qty: 26 },
    { id: 24, name: "item3", qty: 34 },
    { id: 25, name: "item4", qty: 84 },
    { id: 28, name: "item5", qty: 14 },
  ];
  return (
    <div>
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
      />
      <br />
      <ButtonClick onClick={clickHandler}>Click to save</ButtonClick>
      <Container>{inputText}</Container>
    </div>
  );
}
const Input = tw.input`
bg-white text-gray-900 inline-block`;
const ButtonClick = tw.button`
bg-gray-100 text-gray-700 px-2 py-1 my-1`;
const Container = tw.div`
px-4 py-2`;
export default LocalStorage;
