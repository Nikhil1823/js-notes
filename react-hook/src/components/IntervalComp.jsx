import React, { useEffect, useState } from "react";

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
      <p>{count}</p>
    </div>
  );
};

export default IntervalComp;
