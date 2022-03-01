import { nanoid } from "nanoid";
import React, { useState } from "react";
import "../App.css";

function OutOfStock() {
  const [itemList, setItemList] = useState([
    { id: nanoid(), name: "item1", outOfStock: false },
    { id: nanoid(), name: "item2", outOfStock: true },
    { id: nanoid(), name: "item3", outOfStock: false },
    { id: nanoid(), name: "item4", outOfStock: false },
    { id: nanoid(), name: "item5", outOfStock: false },
  ]);
  console.log(itemList);
  return (
    <div className="App">
      <div
        style={{
          color: "black",
          backgroundColor: "#f3f4f6",
          width: "10rem",
          position: "relative",
        }}
      >
        <h4>Name</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit iste
        </p>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#b0a5a5b0",
            fontSize: "1.rem",
            fontWeight: "700",
          }}
        >
          Out Of Stock
        </div>
      </div>
      {itemList.map((item) => {
        return (
          <div
            className="item"
            key={item.id}
            style={{
              color: "black",
              backgroundColor: "#f3f4f6",
              width: "10rem",
              position: "relative",
            }}
          >
            <h4>{item.name}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit iste
            </p>
            {item.outOfStock ? (
              <div className="outOfStock">Out Of Stock</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default OutOfStock;
