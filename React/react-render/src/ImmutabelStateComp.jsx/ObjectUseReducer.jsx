import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      state.count++;
      return state;
    // return { count: state.count + 1 };
    case "reset":
      state.count = 0;
      return state;

      return { count: (state.count = 0) };
    case "decrement":
      state.count -= 1;
      return state;
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const ObjectUseReducer = () => {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });
  console.log("use reducer counter re renders");
  return (
    <div>
      <h2>{counter.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default ObjectUseReducer;
