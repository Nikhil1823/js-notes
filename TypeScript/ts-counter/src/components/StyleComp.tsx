import React from "react";

type StyleProp = {
  style: React.CSSProperties;
};
const StyleComp = (props: StyleProp) => {
  return <div style={props.style}>Style Componnet </div>;
};

export default StyleComp;
