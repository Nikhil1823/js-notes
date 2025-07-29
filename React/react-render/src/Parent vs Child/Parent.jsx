import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent re renders ");
  return (
    <div>
      Parent Component
      <Child />
    </div>
  );
};

export default Parent;
