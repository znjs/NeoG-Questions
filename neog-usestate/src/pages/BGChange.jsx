import React, { useState } from "react";

function BGChange() {
  const [backGround, setBackGround] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setBackGround((prev) => (prev ? false : true))}>
        toggle
      </button>
      <p style={{ backgroundColor: backGround ? "red" : "transparent" }}>
        {" "}
        This is a sample text
      </p>
    </div>
  );
}

export default BGChange;
