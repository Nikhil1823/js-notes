import React, { Component } from 'react'
import FocusChild from './FocusChild'
 class FocusParent extends Component {
    constructor(props){
        super(props)
        this.parentRef=React.createRef()

    }
    componentDidMount(){
          console.log(this.parentRef);
        //   this.parentRef.current.sayMyName()
    }
    makeFocus=()=>{
        this.parentRef.current.focus()
    }
  render() {
    return (
        <>
      <FocusChild ref={this.parentRef}/>
      <button onClick={this.makeFocus}>Click Me</button>
        </>
    )
  }
}

export default FocusParent
