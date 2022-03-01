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
  const addToCart = (id) => {
    let ele = cart.find((ele) => ele.id === id);
    if (ele) {
      setCart(
        cart.map((ele) => {
          if (ele.id === id) {
            return { ...ele, qty: ele.qty + 1 };
          } else return { ...ele };
        })
      );
    } else {
      setCart([...cart, { ...ItemList.find((ele) => ele.id === id), qty: 1 }]);
    }
  };
  const decreaseItemCount = (id) => {
    let itemCount = cart.find((ele) => ele.id === id).qty;
    if (itemCount > 1) {
      setCart(
        cart.map((ele) => {
          if (ele.id === id) {
            return { ...ele, qty: ele.qty - 1 };
          } else return { ...ele };
        })
      );
    } else {
      setCart(cart.filter((ele) => ele.id !== id));
    }
  };
  const calculateTotal = () => {
    if (cart.length)
      return cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
    else return false;
  };
  return (
    <div className="App">
      <div>
        <ul style={{ width: "15rem", marginInline: "auto" }}>
          <div></div>
          {ItemList.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <li style={{ display: "flex" }}>
                <span style={{ width: "8rem" }}>{`${item.name}`}</span>
                <span>{`${item.price}`}</span>
              </li>
              <button onClick={() => addToCart(item.id)}>Add to Cart</button>
            </div>
          ))}
        </ul>
      </div>
      <h1>Cart</h1>
      <button onClick={() => setCart([])}>Clear cart</button>
      <div style={{ width: "15rem", marginInline: "auto" }}>
        {cart.map((item) => {
          return (
            <li
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{`${item.name} X ${item.qty} `}</span>
              <div>
                <button onClick={() => addToCart(item.id)}>+</button> &nbsp;{" "}
                <button onClick={() => decreaseItemCount(item.id)}>-</button>
              </div>
            </li>
          );
        })}
      </div>
      {calculateTotal() && (
        <div>
          <hr style={{ width: "12rem" }} />
          <div>Total: {calculateTotal()}</div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
