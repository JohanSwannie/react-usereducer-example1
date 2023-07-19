import React, { useReducer } from "react";

function App() {
  const [count1, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  const [count2, dispatch2] = useReducer((state, action) => {
    switch (action) {
      case "multiply":
        return state * 2;
      case "divide":
        return state / 2;
      default:
        return state;
    }
  }, 1);

  return (
    <div className="App">
      Count1 is now : {count1}
      <br />
      <br />
      <button onClick={() => dispatch("add")}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch("subtract")}>Decrement</button>
      <br />
      <br />
      Count2 is now : {count2}
      <br />
      <br />
      <button onClick={() => dispatch2("multiply")}>Multiply</button>
      <br />
      <br />
      <button onClick={() => dispatch2("divide")}>Divide</button>
    </div>
  );
}

export default App;
