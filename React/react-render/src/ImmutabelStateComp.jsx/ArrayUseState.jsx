import React, { useState } from "react";
const initState = ["Bruce", "Banner"];
const ArrayUseState = () => {
  const [persons, setPerson] = useState(initState);
  const addMore = () => {
    // persons.push("Clark");
    // persons.push("Kent");
    // setPerson(persons);
    setPerson((prev) => [...prev]);
    console.log(persons);
  };
  console.log("array immutable state  re renders");

  return (
    <div>
      {persons.map((person) => (
        <div key={person}> {person}</div>
      ))}

      <button onClick={addMore}>Add more</button>
    </div>
  );
};

export default ArrayUseState;
