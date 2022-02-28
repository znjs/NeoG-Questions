import React, { useState } from "react";

function CharacterCount() {
  const [msg, setMsg] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setMsg(e.target.value)} />
      <div>{msg}</div>
      <div>
        <span style={{ color: msg.length > 30 ? "red" : "unset" }}>
          {msg.length}
        </span>
        /30
      </div>
      <div>
        {msg.length > 30 && <p>You have exceed the character limit(30)</p>}
      </div>
    </div>
  );
}

export default CharacterCount;
