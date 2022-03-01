import React, { useState } from "react";
import "../App.css";
import "./theme.css";
function ThemeSwitch() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <div className={`App ${lightMode ? "light-mode" : ""}`}>
      <button onClick={() => setLightMode((prev) => !prev)}>
        {lightMode ? "Dark Mode" : "Light Mode"}
      </button>
      <h1>{lightMode ? "Light Mode" : "Dark Mode"}</h1>
      <p>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa
          repellat sequi excepturi laboriosam ipsum provident sapiente similique
          exercitationem eum totam doloribus perferendis, placeat repudiandae
          laudantium mollitia quo repellendus aspernatur!
        </span>
        <span>
          Accusamus id magni amet praesentium quo doloribus quaerat ad vel,
          earum quos sequi reiciendis? Tempora, neque natus, quisquam corrupti
          adipisci repellendus debitis excepturi exercitationem asperiores
          quaerat blanditiis enim qui consectetur?
        </span>
      </p>
    </div>
  );
}

export default ThemeSwitch;
