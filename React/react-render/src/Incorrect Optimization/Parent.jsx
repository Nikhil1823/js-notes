import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent re renders ");
  const [count, setCount] = useState(0);
  const [childValue, setChildValue] = useState(12);
  return (
    <div>
      <h2>count - {count} </h2>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setChildValue((prev) => prev + 1);
        }}
      >
        increase{" "}
      </button>
      <button onClick={() => setCount(0)}>reset </button>
      <button onClick={() => setCount(5)}>go to 5 </button>

      <Child name={{ count: childValue }}></Child>
    </div>
  );
};

export default Parent;
