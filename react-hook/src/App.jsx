import "./App.css";
import CounterComp from "./components/CounterComp";
import ListComp from "./components/ListComp";
import MouseMoveComp from "./components/MouseMoveComp";
import IntervalComp from "./components/IntervalComp";
import {useState} from'react'
function App() {
  const [visibility,setVisibility]=useState(true)
  return (
    <>
      <h1>App Component</h1>
      {/* <CounterComp /> */}
      {/* <button onClick={() => setVisibility(false)}>remove the event</button>
      {visibility && <MouseMoveComp />} */}
<IntervalComp/>
      {/* <ListComp/> */}
    </>
  );
}

export default App;
