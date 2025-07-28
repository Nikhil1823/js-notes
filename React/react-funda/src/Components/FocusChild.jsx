// import React, { Component } from "react";

// export class FocusChild extends Component {
//   constructor(props) {
//     super(props);
//     this.childRef = React.createRef();
//   }

//   makeFocus = () => {
//     this.childRef.current.focus();
//   };
//   sayMyName = () => {
//     console.log("I am batman");
//   };
//   render() {
//     return (
//       <div>
//         <input type="text" name="" id="" ref={this.childRef} />
//       </div>
//     );
//   }
// }

import React, { forwardRef } from 'react'
const FocusChild=forwardRef((props,ref)=>{ return (
    <input type="text" name="" id=""  ref={ref}/>
  )}) 
 


export default FocusChild


