import React, { useState } from "react";

const useTimer = (val) => {
  const [timer, setTimer] = useState(0);
  setInterval(() => setTimer((prev) => prev + 1), val * 1000);
  return timer;
};

export default useTimer;
