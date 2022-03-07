import tw from "tailwind-styled-components";
import React, { useEffect, useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  useEffect(() => console.log(count));
  return (
    <div>
      <h1 className="text-2xl">React app</h1>
      <ButtonClick onClick={() => setCount((prev) => prev + 1)}>
        Increase me
      </ButtonClick>
      <div>{count}</div>
    </div>
  );
}
const ButtonClick = tw.button`
bg-gray-100 text-gray-700 px-2 py-1`;
export default Button;
