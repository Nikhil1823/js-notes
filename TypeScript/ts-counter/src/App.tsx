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
import RestrictingPropComp from "./components/RestrictingPropComp";
import PolyMorphicComp from "./components/PolyMorphicComp";

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
      <RestrictingPropComp value={"10"} isPositive />
      <PolyMorphicComp as="div">
        <h1>hello</h1>
      </PolyMorphicComp>
      <PolyMorphicComp as="label" htmlFor="someThinf">
        <h1>hello</h1>
      </PolyMorphicComp>
    </>
  );
}

export default App;
