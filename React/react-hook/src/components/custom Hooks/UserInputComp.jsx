import React from "react";
import useInput from "./hooks/useInput";
const UserInputComp = () => {
  const [bindName, name, resetName] = useInput();
  const [bindAge, age, resetAge] = useInput();

  return (
    <div>
      <div className="input">
        <label htmlFor="">Name</label> <input type="text" {...bindName} />
      </div>
      <div className="age">
        <label htmlFor="">Age : </label>
        <input type="text" {...bindAge} />
      </div>
      <button
        onClick={() => {
          alert(`hello  ${name} you have ${age} yrs to live`);
          resetAge();
          resetName();
        }}
      >
        Submit
      </button>
      <button
        onClick={() => {
          resetAge(), resetName();
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default UserInputComp;
