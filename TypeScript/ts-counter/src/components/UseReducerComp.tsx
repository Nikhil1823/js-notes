import { useReducer } from "react";
type StateProp = {
  count: number;
};
type ActionProp = {
  payload: 1 | 10 | 0;
  type: "increment" | "decrement" | "reset";
};

const reducer = (state: StateProp, action: ActionProp): StateProp => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
const UseReducerComp = () => {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>{counter.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Subs 1
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Subs 10
      </button>
    </div>
  );
};

export default UseReducerComp;
