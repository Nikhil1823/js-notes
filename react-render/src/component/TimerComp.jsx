import { useState } from "react";
import userForm from "../Custom Hook/userForm";
import useTimer from "../Custom Hook/useTimer";

const TimerComp = () => {
  const [input, inputConfig] = userForm(); // input is probably string
  const [start, setStart] = useState(false);

  const parsedInput = Number(input); // ensure it's a number
  const timer = useTimer(start, parsedInput);

  const handleStart = () => {
    if (parsedInput > 0) {
      setStart(true);
    }
  };

  return (
    <div>
      <div className="input">
        <label htmlFor="" style={{ marginRight: "10px" }}>
          Enter your interval :
        </label>
        <input type="number" {...inputConfig} />
      </div>

      <div className="button-div" style={{ marginTop: "30px" }}>
        <button onClick={handleStart}>Start Timer</button>
        {start && parsedInput > 0 && <h2>{timer}</h2>}
      </div>
    </div>
  );
};

export default TimerComp;
