

import { Component } from "react";

import ParentComp from "./ParentComp";
import FocusParent from "./Components/FocusParent";

function App() {
  // const [count, setCount] = useState(0)
  const greetMe = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <>
      <FocusParent />
    </>
  );
}

export default App;
