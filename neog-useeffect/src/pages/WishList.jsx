import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { nanoid } from "nanoid";

function WishList() {
  const [itemList, setItemList] = useState([]);
  const [item, setItems] = useState("");
  function clickHandler() {
    setItemList((prev) => [...prev, { id: nanoid(), name: item }]);
    localStorage.setItem(
      "wishList",
      JSON.stringify([...itemList, { id: nanoid(), name: item }])
    );
    setItems("");
  }
  useEffect(
    () =>
      setItemList(
        JSON.parse(localStorage.getItem("wishList"))
          ? JSON.parse(localStorage.getItem("wishList"))
          : []
      ),
    []
  );
  return (
    <>
      <Input
        value={item}
        onChange={(e) => setItems(e.target.value)}
        type="text"
      />
      <Button onClick={clickHandler}>Add to wishlist</Button>
      <Container>
        {itemList.map((ele) => (
          <Item key={ele.id}>{ele.name}</Item>
        ))}
      </Container>
    </>
  );
}
const Input = tw.input`
bg-white text-gray-900 inline-block`;
const Button = tw.button`
bg-gray-100 text-gray-700 px-2 py-1 my-1`;
const Container = tw.ul``;
const Item = tw.li``;
export default WishList;
