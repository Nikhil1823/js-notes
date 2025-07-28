import React, { useState } from "react";
import useTitleUpdate from "./hooks/useTitleUpdate";
const TitleUpdateComp = () => {
  const [count, setCount] = useState(0);
  useTitleUpdate(count);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default TitleUpdateComp;
