import { useState } from "react";
import "./App.css";
// import FetchData from "./components/FetchData";
// import Status from "./components/Status";
// import StyleComp from "./components/StyleComp";
// import LoginComp from "./components/LoginComp";
import UseReducerComp from "./components/UseReducerComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <br />
      <br />
      <br />
      <br />
      {/* <FetchData /> */}
      {/* <Status status="success" />
      <StyleComp style={{ backgroundColor: "red" }} /> */}
      {/* <LoginComp /> */}
      <UseReducerComp />
    </>
  );
}

export default App;
