import React, { useState } from "react";

function AddToCart() {
  const [cart, setCart] = useState([]);
  const ItemList = [
    { id: 1, name: "apple", price: 59 },
    { id: 2, name: "banana", price: 5 },
    { id: 3, name: "papaya", price: 30 },
    { id: 4, name: "muskmelon", price: 55 },
    { id: 5, name: "watermelon", price: 60 },
    { id: 6, name: "dragon Fruit", price: 90 },
  ];
  return (
    <div className="App">
      <div>
        <ul>
          {ItemList.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <li style={{ width: "8rem" }}>{item.name}</li>
              <button>cart</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddToCart;
