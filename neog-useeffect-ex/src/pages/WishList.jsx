import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
function WishList() {
  const [item, setItem] = useState("");
  const [wishList, setWishList] = useState([]);
  const addItem = () => {
    setWishList((prev) => [...prev, item]);
    localStorage.setItem("wishList", JSON.stringify([...wishList, item]));
    setItem("");
  };
  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("wishList")));
    setWishList(JSON.parse(localStorage.getItem("wishList")));
  }, []);
  return (
    <>
      <Input
        type="text"
        value={item}
        placeholder="Enter the Item name"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <Button onClick={addItem}>Add to wish list</Button>
      <Container>
        {wishList.map((ele) => {
          return <Item key={nanoid()}>{ele}</Item>;
        })}
      </Container>
    </>
  );
}
const Input = tw.input`text-blue-900 px-2 py-1 outline-none`;
const Button = tw.button`px-2 py-1 mx-1 bg-gray-100 text-gray-900 rounded-md`;
const Container = tw.ul``;
const Item = tw.li``;
export default WishList;
