import React from "react";

const TitleComp = (props) => {
  console.log("titile compo re rendered");

  return <h1>{props.title}</h1>;
};

export default React.memo(TitleComp);
