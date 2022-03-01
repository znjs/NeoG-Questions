import React, { useState } from "react";
import "../App.css";
import SwitchTabAbout from "./SwitchTabAbout";
import SwitchTabHome from "./SwitchTabHome";
import SwitchTabProfile from "./SwitchTabProfile";
function SwitchTabs() {
  const [page, setPage] = useState({
    home: true,
    about: false,
    profile: false,
  });
  const pageHolder = {
    home: false,
    about: false,
    profile: false,
  };
  return (
    <div className="App">
      <button onClick={() => setPage({ ...pageHolder, home: true })}>
        Home
      </button>
      <button onClick={() => setPage({ ...pageHolder, about: true })}>
        About
      </button>
      <button onClick={() => setPage({ ...pageHolder, profile: true })}>
        Profile
      </button>
      <div>
        {page.home && <SwitchTabHome />}
        {page.about && <SwitchTabAbout />}
        {page.profile && <SwitchTabProfile />}
      </div>
    </div>
  );
}

export default SwitchTabs;
