import { memo } from "react";
import DummyChild from "./DummyChild";

const Child = ({ name }) => {
  console.log("child re render");
  return (
    <div>
      <h2>Child component : {name.count} </h2>
      <DummyChild />
    </div>
  );
};

export default memo(Child);
