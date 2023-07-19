import React, { useReducer } from "react";

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div className="App">
      The Count is now : {count}
      <br />
      <br />
      <button onClick={() => dispatch("add")}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch("subtract")}>Decrement</button>
    </div>
  );
}

export default App;
