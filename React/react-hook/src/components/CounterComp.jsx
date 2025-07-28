import React, { useState, useEffect, useContext } from "react";
import { kazhap } from "./IntervalComp";
const CounterComp = () => {
  const passedCount = useContext(kazhap);

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `clicked ${count} times`;
    () => (document.title = "Vite + React");
  }, [count]);

  return (
    <div>
      <p>Time counter from another component : {passedCount}</p>

      <p>You clicked {count} times </p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment me</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement me</button>
    </div>
  );
};

export default CounterComp;
