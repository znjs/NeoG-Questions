import React, { useState } from "react";

function PasswordCheck() {
  const [password, setPassword] = useState("");
  const [condition, setCondition] = useState(false);
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 7) {
      let isNum = false,
        isAlpha = false;
      e.target.value.split("").forEach((char) => {
        isNaN(char) ? (isAlpha = true) : (isNum = true);
      });
      setCondition(isNum ? (isAlpha ? true : false) : false);
    } else setCondition(false);
  };
  return (
    <div className="App">
      <input onChange={passwordHandler} type="password" />
      <div>
        {!condition && (
          <p>The password must be alphanumeric and 8 characters</p>
        )}
      </div>
      {password}
    </div>
  );
}

export default PasswordCheck;
