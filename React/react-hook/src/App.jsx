import "./App.css";
// import SimpleComp from "./components/useCallBack/SimpleComp";
// import CounterRefComp from "./components/CounterRefComp";
// import TodoReducerComp from "./components/TodoReducerComp";
// import ShoppingCartComp from "./components/useReducer practise/ShoppingCartComp";
// import CounterMemoComp from "./components/useMemo/CounterMemoComp";
// import TitleUpdateComp from "./components/custom Hooks/TitleUpdateComp";
// import CounterUpdateComp from "./components/custom Hooks/CounterUpdateComp";
// import IntervalComp from "./components/IntervalComp";
// import DataFetchComp from "./components/DataFetchComp";
// import PassDataComp from "./components/PassDataComp";
import UserInputComp from "./components/custom Hooks/UserInputComp";
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
      {/* <SimpleComp /> */}
      {/* <CounterMemoComp /> */}
      {/* <TitleUpdateComp />  */}
      {/* <CounterUpdateComp /> */}
      <UserInputComp />
    </>
  );
}

export default App;
