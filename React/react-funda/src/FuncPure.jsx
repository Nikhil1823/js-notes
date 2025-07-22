import React, { useRef } from 'react'

const FuncPure = (props) => {
  const pointer=useRef()
    console.log("function pure re rendered")
    console.log(pointer.current);
    
  return (
    <div>
      <h1 ref={pointer}>Hi i am Pure Function {props.name}</h1>
      {console.log(pointer)}
      {console.log('value',pointer.innerHTML)}
    </div>
  );
}
export default React.memo(FuncPure)
