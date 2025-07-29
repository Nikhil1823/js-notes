import { useReducer } from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;
    case "reset":
      return 0;

    default:
      return prevState;
  }
};

const UseReducerComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  console.log("re rendering the use reducer func");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducerComp;
