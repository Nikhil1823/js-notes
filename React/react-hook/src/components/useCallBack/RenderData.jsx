import React from "react";

const RenderData = (props) => {
  console.log(`${props.text} compoennr re-renders`);

  return (
    <div>
      <h1>{props.value}</h1>
      <h2>{props.text}</h2>
    </div>
  );
};

export default React.memo(RenderData);
