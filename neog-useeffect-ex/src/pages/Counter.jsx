import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
//?EX1

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`The intial count is: ${counter}`);
  }, []);

  return (
    <>
      <Container>Counter:{counter}</Container>
      <Button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        -
      </Button>
    </>
  );
}
const Container = tw.div`px-4 py-2 my-3`;
const Button = tw.button`px-2 py-1 mx-1 bg-gray-100 text-gray-900 rounded-md`;
export default Counter;
