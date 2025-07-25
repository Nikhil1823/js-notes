import React, { useState } from "react";
import useInput from "./hooks/useInput";
const UserInputComp = () => {
  const [bindName, name, resetName] = useInput();
  const [bindAge, age, resetAge] = useInput();
  const [fruits, setFruits] = useState([
    "apple",
    "orange",
    "mango",
    "bmw",
    "audi",
    "banaana",
  ]);
  const updateList = (i) => {
    setFruits((prevFruit) => prevFruit.filter((_, index) => index != i));
  };
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
      <ul>
        {console.log(fruits)}
        {fruits.map((item, i) => {
          return <li onClick={() => updateList(i)}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserInputComp;
