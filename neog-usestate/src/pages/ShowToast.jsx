import React, { useState } from "react";
import "../App.css";
import Toast from "./Toast";
function ShowToast() {
  const [toast, setToast] = useState({
    error: false,
    warning: false,
    success: false,
  });
  const defaultToast = {
    error: false,
    warning: false,
    success: false,
  };
  return (
    <div className="App">
      <button onClick={() => setToast({ ...defaultToast, error: true })}>
        error Toast
      </button>
      <button onClick={() => setToast({ ...defaultToast, warning: true })}>
        warning Toast
      </button>
      <button onClick={() => setToast({ ...defaultToast, success: true })}>
        success Toast
      </button>
      {toast.error && (
        <Toast toastColor="black" toastBgColor="#ef4444" msg="error" />
      )}
      {toast.success && (
        <Toast toastColor="#3f6212" toastBgColor="#a3e635" msg="success" />
      )}
      {toast.warning && (
        <Toast toastColor="#7c2d12" toastBgColor="#fdba74" msg="warning" />
      )}
    </div>
  );
}

export default ShowToast;
