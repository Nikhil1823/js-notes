import { useState } from "react";
import ChildOne from "./ChildOne";

const ParentOne = ({ children }) => {
  console.log("ParentOne re renders ");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>count - {count} </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increase </button>
      <button onClick={() => setCount(0)}>reset </button>
      <button onClick={() => setCount(5)}>go to 5 </button>
      {children}
      <ChildOne />
    </div>
  );
};

export default ParentOne;
