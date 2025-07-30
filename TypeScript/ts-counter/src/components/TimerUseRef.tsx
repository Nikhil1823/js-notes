import { useState, useEffect, useRef } from "react";

const TimerUseRef = () => {
  const counterRef = useRef<number | null | NodeJS.Timeout>(null);

  const [timer, setTimer] = useState(0);
  const stopTimer = () => {
    counterRef.current ? clearInterval(counterRef.current) : "";
    console.log("clearing the interval");
  };
  useEffect(() => {
    counterRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);

    return () => stopTimer();
  }, []);

  return (
    <div>
      <h2> {timer}</h2>
      <button onClick={stopTimer}> stop timer</button>
    </div>
  );
};

export default TimerUseRef;
