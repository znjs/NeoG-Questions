import React, { useState } from "react";
import "../App.css";

function MiniFigma() {
  const [textStyle, setTextStyle] = useState({
    fontSize: 16,
    fontFamily: "ff-roboto",
  });
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() =>
          setTextStyle((prev) => ({ ...prev, fontSize: prev.fontSize + 8 }))
        }
      >
        +
      </button>
      <button
        onClick={() =>
          setTextStyle((prev) => ({ ...prev, fontSize: prev.fontSize - 8 }))
        }
      >
        -
      </button>
      <br />
      <label htmlFor="fontFamily">Select the font-family: </label>
      <select
        onClick={(e) =>
          setTextStyle((prev) => ({ ...prev, fontFamily: e.target.value }))
        }
        name="fontFamily"
      >
        <option value="ff-roboto">Roboto </option>
        <option value="ff-comic">Comic</option>
        <option value="ff-openSans">Open Sans</option>
        <option value="ff-festive">Festive</option>
      </select>
      <div
        className={textStyle.fontFamily}
        style={{ fontSize: `${textStyle.fontSize}px` }}
      >
        {text}
      </div>
    </div>
  );
}

export default MiniFigma;
