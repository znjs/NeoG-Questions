import React, { useState } from "react";

function LikeInaList() {
  const [list, setList] = useState([
    { id: 1, name: "item1", like: false },
    { id: 2, name: "item2", like: false },
    { id: 3, name: "item3", like: false },
    { id: 4, name: "item4", like: false },
    { id: 5, name: "item5", like: false },
  ]);
  return (
    <div className="App">
      <h1>List items</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {`${item.name} `} &nbsp;
            <button
              style={{ width: "3rem" }}
              onClick={() =>
                setList(
                  list.map((ele) =>
                    item.id === ele.id
                      ? { ...ele, like: ele.like ? false : true }
                      : ele
                  )
                )
              }
            >
              {item.like ? "unlike" : "like"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LikeInaList;
