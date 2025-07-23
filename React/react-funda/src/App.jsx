import { Component, Fragment } from "react";
import hocWrapper from "./Utils/ClickerHOC";
import HoverComp from "./Components/HoverComp";
import ClickerComp from "./Components/ClickerComp";
import ErrorHandler from "./Utils/ErrorHandler";
function App() {
  // const [count, setCount] = useState(0)
  const greetMe = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div onClick={() => console.log("app got clicked")}>
      <ErrorHandler><ClickerComp name="Nikhil:"/></ErrorHandler>
      <ErrorHandler><HoverComp /></ErrorHandler>
    </div>
  );
}

export default App;
