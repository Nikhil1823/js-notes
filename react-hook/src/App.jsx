import "./App.css";

// import IntervalComp from "./components/IntervalComp";
// import DataFetchComp from "./components/DataFetchComp";
import PassDataComp from "./components/PassDataComp";

// import {useState} from'react'
function App() {
  // const [visibility,setVisibility]=useState(true)
  return (
    <>
      <h1>App Component</h1>
      {/* <DataFetchComp /> */}
      <PassDataComp />
      {/* <CounterComp /> */}
      {/* <button onClick={() => setVisibility(false)}>remove the event</button>
      {visibility && <MouseMoveComp />} */}
      {/* <IntervalComp/> */}
      {/* <ListComp/> */}
    </>
  );
}

export default App;
