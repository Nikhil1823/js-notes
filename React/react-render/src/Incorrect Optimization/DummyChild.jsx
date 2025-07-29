import React, { memo } from "react";

const DummyChild = () => {
  console.log("dummy child renders");
  return <div>Dummy Child</div>;
};

export default memo(DummyChild);
