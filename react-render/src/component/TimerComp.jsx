import { useState } from "react";
import userForm from "../Custom Hook/userForm";
import useTimer from "../Custom Hook/useTimer";
const TimerComp = () => {
  const [input, inputConfig] = userForm();
  const [start, setStart] = useState(false);
  const timer = useTimer(start ? input : 0);
  const handleStart = () => {
    if (input > 0) {
      setStart(true);
    }
  };
  return (
    <div>
      <div className="input">
        <label htmlFor="" style={{ marginRight: "10px" }}>
          Enter your interval :
        </label>
        <input type="number" name="" id="" {...inputConfig} />
      </div>
      <div className="button-div" style={{ marginTop: "30px" }}>
        <button onClick={handleStart}>Start Timer</button>
        {start && input ? <h2>{timer}</h2> : ""}
      </div>
    </div>
  );
};

export default TimerComp;
