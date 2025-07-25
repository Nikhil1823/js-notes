import React from "react";

const SimpleButton = (props) => {
  console.log(`button ${props.text} re rendered `);

  return (
    <div>
      <button onClick={props.action}>{props.text}</button>
    </div>
  );
};

export default React.memo(SimpleButton);
