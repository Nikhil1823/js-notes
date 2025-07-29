import { useState } from "react";

const UseStateComp = () => {
  const [count, setCount] = useState(0);
  console.log("useState re renders ");

  return (
    <div>
      <h2>count -{count} </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increase </button>
      <button onClick={() => setCount(0)}>reset </button>
      <button onClick={() => setCount(5)}>go to 5 </button>
    </div>
  );
};

export default UseStateComp;
