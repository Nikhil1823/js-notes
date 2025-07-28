import React, { useState, useCallback } from "react";
import TitleComp from "./TitleComp";
import RenderData from "./RenderData";
import SimpleButton from "./SimpleButton";
const SimpleComp = () => {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(50000);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const increaseSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, []);
  console.log("parent component re renders");
  return (
    <>
      <TitleComp title={"Use Callback hook"} />
      <RenderData value={count} text={"Count"} />
      <SimpleButton text={"Increase count"} action={increment} />
      <RenderData value={salary} text={"Salary"} />
      <SimpleButton action={increaseSalary} text={"Increase Salary"} />
    </>
  );
};

// here button compoennt also re render even though there is no change in them like the slary button component changes when we click the count buttin
// it happens even after we wrap everything inside memo() . this happens beacuse
//If the parent re-renders, then all its child components also re-render by default, unless memoized. so in that case all the functions inside the parent component also re render or created in that casr the component that takes those functions are props now think that their props values are changes i mran those finction and that is why they unnecessarly rerenders
// here the salry button re renders because the since the count variable in the parent component change it will re render the parent component result in intialising those funtions again causing re render in those child components so to avoid i need to use callback hook on that functions

export default React.memo(SimpleComp);
