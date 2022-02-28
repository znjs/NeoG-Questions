import React, { useState } from "react";
//ex 5
function ShowPassword() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <input
        type={show ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}

export default ShowPassword;
