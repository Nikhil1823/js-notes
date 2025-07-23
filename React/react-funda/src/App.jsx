import ComponentA from "./Components/ComponentA";

import { UserProvider } from "./Utils/ContextProvider";
import ErrorHandler from "./Utils/ErrorHandler";
function App() {
  // const [count, setCount] = useState(0)
  const greetMe = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <div onClick={() => console.log("app got clicked")}>
      <ErrorHandler>
        {/* <UserProvider > */}
          <ComponentA />
        {/* </UserProvider> */}
      </ErrorHandler>
    </div>
  );
}

export default App;
