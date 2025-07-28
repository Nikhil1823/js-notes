import React, { useState, useMemo, useRef } from "react";

const CounterMemoComp = () => {
  const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  const counter = useRef(0);
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1111000000) i++;

    return count1 % 2 == 0;
  }, [count1]);
  return (
    <div>
      <span>{count1}</span> <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={() => setCount1((prev) => prev + 1)}>Increase</button>
      <p>{counter.current}</p>
      <button
        onClick={() => {
          counter.current += 1;
          console.log(counter);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default CounterMemoComp;
