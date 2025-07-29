import { useState, memo } from "react";

const ChildOne = ({ value = 0 }) => {
  console.log("childOne re render with value", value);
  return (
    <div>
      <h3>Child Component {(value += 10)}</h3>
    </div>
  );
};

export default memo(ChildOne);
