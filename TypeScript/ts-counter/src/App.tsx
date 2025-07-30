import { useState } from "react";
import "./App.css";
// import FetchData from "./components/FetchData";
// import Status from "./components/Status";
// import StyleComp from "./components/StyleComp";
// import LoginComp from "./components/LoginComp";
// import UseReducerComp from "./components/UseReducerComp";
// import UseContextComp from "./components/UseContextComp";
// import UseContextConsumer from "./components/UseContextConsumer";
// import TimerUseRef from "./components/TimerUseRef";
// import ClassComp from "./components/ClassComp";
import ListComp from "./components/ListComp";

function App() {
  const [count, setCount] = useState(0);

  const ListItem = [1, 2, 3, "apple"];

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
      {/* <UseContextComp>
        <UseContextConsumer />
      </UseContextComp> */}
      {/* <TimerUseRef /> */}
      {/* <ClassComp /> */}
      <ListComp item={ListItem} />
    </>
  );
}

export default App;
