import React, { useState } from "react";
//EX:2 and 4
function PasswordMatch() {
  const [password, setPassword] = useState({
    passwordOne: "",
    passwordTwo: "",
  });
  const [btnState, setBtnState] = useState(true);
  const submitHandler = (passOne, passTwo) => {
    if (passOne === "" || passTwo === "") setBtnState(true);
    else if (passOne === passTwo) setBtnState(false);
    else setBtnState(true);
  };
  return (
    <div className="App">
      <input
        onChange={(e) =>
          setPassword((prev) => {
            submitHandler(e.target.value, password.passwordTwo);
            return { ...prev, passwordOne: e.target.value };
          })
        }
        type="password"
      />
      <input
        onChange={(e) =>
          setPassword((prev) => {
            submitHandler(password.passwordOne, e.target.value);
            return { ...prev, passwordTwo: e.target.value };
          })
        }
        type="password"
      />
      <button
        disabled={btnState}
        onClick={() => console.log(password.passwordOne)}
      >
        submit
      </button>
      <h1>{password.passwordOne}</h1>
      <h1>{password.passwordTwo}</h1>
    </div>
  );
}

export default PasswordMatch;
