

import { Component } from "react";

import ParentComp from "./ParentComp";
import FocusParent from "./Components/FocusParent";
import PortalComp from "./Components/PortalComp";
function App() {
  // const [count, setCount] = useState(0)
  const greetMe = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <>
    <ParentComp/>
    <PortalComp/>
    </>
  );
}

export default App;
