import React, { useEffect, useState } from "react";
import MouseMoveComp from "./MouseMoveComp";
const kazhap = React.createContext();

const IntervalComp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    () => {
      console.log("cleaning up the timer");
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <kazhap.Provider value={count}>
        <MouseMoveComp />
      </kazhap.Provider>
    </div>
  );
};

export default IntervalComp;
export { kazhap };
