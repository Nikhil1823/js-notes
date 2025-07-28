import React from "react";
import useCounter from "./hooks/useCounter";
const CounterUpdateComp = () => {
  const [counter, increment, decrement, reset] = useCounter();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterUpdateComp;
