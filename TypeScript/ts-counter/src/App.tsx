import { useState } from "react";
import "./App.css";
import FetchData from "./components/FetchData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <FetchData />
    </>
  );
}

export default App;
