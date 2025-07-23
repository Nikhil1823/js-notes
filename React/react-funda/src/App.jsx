import ErrorHandler from "./Utils/ErrorHandler";
import FetchData from "./Components/FetchData";
import PassData from "./Components/PassData";
function App() {
  return (
    <div onClick={() => console.log("app got clicked")}>
      <ErrorHandler>
        <PassData />
      </ErrorHandler>
    </div>
  );
}

export default App;
