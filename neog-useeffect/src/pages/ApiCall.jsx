import tw from "tailwind-styled-components";
import axios from "axios";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { createServer } from "miragejs";

// createServer({
//   routes() {
//     this.get("/api/todos", () => [
//       { id: 0, text: "buy groceries", isDone: false },
//       { id: 1, text: "Walk the dog", isDone: false },
//       { id: 2, text: "Buy egg", isDone: false },
//       { id: 3, text: "Learn Mirage", isDone: false },
//     ]);
//   },
// });
function ApiCall() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // axios.get("/api/todos").then((res) => console.log(res));
    // .then((json) => {
    //   setTodos(json.todos);
    //   setLoading("success");
    // });

    // .then((res) => res.json())
    // .then((data) => console.log(data));

    //Using dummy until API is ready
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // setTodos([
      //   { id: nanoid(), text: "buy groceries", isDone: false },
      //   { id: nanoid(), text: "Walk the dog", isDone: false },
      //   { id: nanoid(), text: "Buy egg", isDone: false },
      //   { id: nanoid(), text: "Learn Mirage", isDone: false },
      // ]);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const updateTodos = (ele) => {
    let id = ele.id;
    setTodos((prev) => [
      ...prev.map((ele) => {
        console.log(id);
        return ele.id === id ? { ...ele, isDone: !ele.isDone } : ele;
      }),
    ]);
    setTodos((prev) => {
      console.log(prev);
      return prev;
    });
  };
  let done = todos.filter((todo) => todo.isDone).length;
  return (
    <div>
      {loading ? "loading" : ""}
      <Wrapper>
        {todos.map((ele) => {
          return (
            <InputWrapper
              style={{ opacity: ele.isDone ? 0.8 : "unset" }}
              key={ele.id}
            >
              <input
                type="checkbox"
                name={ele.id}
                id={ele.id}
                // checked={ele.isDone}
                onClick={() => {
                  updateTodos(ele);
                }}
              />
              <label
                style={{
                  textDecoration: ele.isDone ? "line-through" : "unset",
                }}
                htmlFor={ele.id}
              >
                {ele.text}
              </label>
            </InputWrapper>
          );
        })}
      </Wrapper>
      {done}
    </div>
  );
}
const Wrapper = tw.div``;
const InputWrapper = tw.div`py-1 px-2 mx-auto text-gray-900 text-left w-36 bg-gray-100`;
export default ApiCall;
