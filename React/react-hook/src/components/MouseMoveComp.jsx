import React, { useEffect, useState } from "react";
import CounterComp from "./CounterComp";

const MouseMoveComp = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("calling th useEffect");
    window.addEventListener("mousemove", (e) =>
      setMousePos({ x: e.clientX, y: e.clientY })
    );
    return () => {
      console.log("component unmounting");
      window.removeEventListener("mousemove", (e) =>
        setMousePos({ x: e.clientX, y: e.clientY })
      );
    };
  }, []);

  return (
    <div>
      <h3>Mouse Positions : </h3>
      <span> x: {mousePos.x}</span>
      <span> y: {mousePos.y}</span>
      <CounterComp />
    </div>
  );
};

export default MouseMoveComp;
