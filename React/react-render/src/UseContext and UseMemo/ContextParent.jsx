import React, { memo, useContext, useState } from "react";

const parentContext = React.createContext();
const ContextParent = () => {
  console.log("parent renders");
  const [count, setCount] = useState(0);
  return (
    <div>
      Parent component
      <parentContext.Provider value={count}>
        <ChildA />
      </parentContext.Provider>
      <button onClick={() => setCount((prev) => prev + 1)}>Change Count</button>
    </div>
  );
};

export default ContextParent;

const ChildD = () => {
  console.log("child D renderes");
  const countContext = useContext(parentContext);

  return <h2>Child D Rendered : {countContext}</h2>;
};
const ChildC = memo(() => {
  console.log("child C renderes");

  return (
    <div>
      <h2>Child C Rendered</h2>
      <ChildD />
    </div>
  );
});

const ChildB = memo(() => {
  console.log("child B renderes");

  return (
    <div>
      {" "}
      <h2>Child B Rendered</h2>
      <ChildC />
    </div>
  );
});

const ChildA = memo(() => {
  console.log("child A renderes");

  return (
    <div>
      {" "}
      <h2>Child A Rendered</h2>
      <ChildB />
    </div>
  );
});
