import React, { useState } from "react";
import tw from "tailwind-styled-components";
import axios from "axios";
import { nanoid } from "nanoid";
function AxiosGetReq() {
  const [data, setData] = useState("initialState");
  const postData = () => {
    // console.log(data);
    axios.post("/api/users", { id: nanoid(), name: data }).then((res) => {
      console.log(res);
      console.log("Post request sucessfully made");
    });
    setData("");
  };
  const getData = () => {
    // fetch("/api/users")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data.users));
    axios("/api/users")
      .then((res) => res.data)
      .then((data) => console.log(data.users));
  };
  return (
    <>
      <Input type="text" onChange={(e) => setData(e.target.value)} />
      <Button onClick={getData}>Get Data</Button>
      <Button onClick={postData}>Post Data</Button>
    </>
  );
}
const Input = tw.input`text-blue-900 px-2 py-1 outline-none`;

const Button = tw.button`px-2 py-1 mx-1 bg-gray-100 text-gray-900 rounded-md`;

export default AxiosGetReq;
