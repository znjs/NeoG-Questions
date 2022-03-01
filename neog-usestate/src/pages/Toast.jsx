import React, { useState } from "react";
import "./toast.css";
function Toast({ toastColor, toastBgColor, msg }) {
  const [hidden, setHidden] = useState(false);
  const styles = {
    color: "black",
    bgColor: "#ef4444",
  };
  return (
    <div>
      <div
        style={{ color: toastColor, backgroundColor: toastBgColor }}
        className={`toast-container ${hidden ? "d-none" : "d-flex"}`}
      >
        <p>This is a {msg} toast message</p>
        <i onClick={() => setHidden(true)} className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default Toast;
