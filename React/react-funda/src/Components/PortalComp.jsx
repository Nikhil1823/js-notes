import React from "react";
import { createPortal } from "react-dom";

const PortalComp = () => {
  return createPortal(
    <div onClick={()=>{console.log("clicked on div element")}}>
      <h2 onClick={()=>{console.log('Clicked the h1 tag')}}>Hello i am outide the app component and i am using portals </h2>
    </div>,
    document.getElementById("portal-root")
  );
};
  
export default PortalComp;



