// App.js
import React, { useState, useEffect } from "react";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ]);
  },
});

function Test() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users").then((response) => console.log(response));
    //   .then((json) => setUsers(json));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Test;
