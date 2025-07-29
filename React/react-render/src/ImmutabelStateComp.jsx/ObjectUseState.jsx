import React, { useState } from "react";

const person = {
  fname: "Bruce ",
  lname: "Banner ",
};
const ObjectUseState = () => {
  const [name, setName] = useState(person);
  const updateName = () => {
    setName((prev) => ({ ...prev, lname: "Wayne" }));
    // setName(newPerson);
  };
  console.log("use state rendering");

  return (
    <div>
      <h2 onClick={updateName}>
        {name.fname}
        {name.lname}
      </h2>
    </div>
  );
};

export default ObjectUseState;
