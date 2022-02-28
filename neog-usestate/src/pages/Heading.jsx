import React, { useState } from "react";

export default function Heading() {
  const [text, updateText] = useState("");
  const [fontSize, setFontSize] = useState("1em");
  console.log(fontSize);
  return (
    <div className="App">
      <input onChange={(e) => updateText(e.target.value)}></input>
      <button onClick={() => setFontSize("4em")}>h1</button>
      <button onClick={() => setFontSize("2em")}>h2</button>
      <button onClick={() => setFontSize("1em")}>Default</button>
      <div style={{ fontSize: fontSize }}>{text}</div>
    </div>
  );
}
