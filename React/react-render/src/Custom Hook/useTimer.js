import { useEffect, useRef, useState } from "react";

const useTimer = (start, interval) => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  console.log(interval);

  useEffect(() => {
    if (!start || interval <= 0) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, interval * 1000);

    return () => clearInterval(intervalRef.current);
  }, [start, interval]);

  return timer;
};

export default useTimer;
