import "./App.css";
import SimpleComp from "./components/useCallBack/SimpleComp";
// import CounterRefComp from "./components/CounterRefComp";
// import TodoReducerComp from "./components/TodoReducerComp";
// import ShoppingCartComp from "./components/useReducer practise/ShoppingCartComp";

// import IntervalComp from "./components/IntervalComp";
// import DataFetchComp from "./components/DataFetchComp";
// import PassDataComp from "./components/PassDataComp";

// import {useState} from'react'
function App() {
  // const [visibility,setVisibility]=useState(true)
  return (
    <>
      <h1>App Component</h1>
      {/* <DataFetchComp /> */}
      {/* <PassDataComp /> */}
      {/* <CounterRefComp /> */}
      {/* <TodoReducerComp /> */}
      {/* <ShoppingCartComp /> */}
      {/* <CounterComp /> */}
      {/* <button onClick={() => setVisibility(false)}>remove the event</button>
      {visibility && <MouseMoveComp />} */}
      {/* <IntervalComp /> */}
      {/* <ListComp/> */}
      <SimpleComp />
    </>
  );
}

export default App;
