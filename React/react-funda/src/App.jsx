import { Component, Fragment } from "react";
import Hero from "./Components/Hero";
import FuncPure from "./FuncPure";
import ErrorHandler from "./Utils/ErrorHandler";
function App() {
  // const [count, setCount] = useState(0)
  const greetMe = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div onClick={() => console.log("app got clicked")}>
      <ErrorHandler>
        <Hero name="Superman" />
      </ErrorHandler>
      <ErrorHandler>
        <Hero name="Batman" />
      </ErrorHandler>
      <ErrorHandler>
        <FuncPure name="sugumar" />
      </ErrorHandler>
    </div>
  );
}

export default App;
