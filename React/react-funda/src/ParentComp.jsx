import React, { Component } from "react";
import PureComp from "./PureComp";
import NormalComp from "./NormalComp";
import FuncPure from "./FuncPure";
class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Sthreerag",
    };
   
  }

  componentDidMount() {
    const interval=setInterval(()=>{
        this.setState({
            name:"Sreerag"
        })
    },1000)
clearInterval(interval)
    
    };
  ;
  render() {
    console.log('parent component re rendered')
    return <div>
        <h1>Parent Component rendered</h1>
        {/* <PureComp name={this.state.name}/> */}
        <FuncPure name={this.state.name}/>
        <NormalComp name={this.state.name}/>
    </div>;
  }
}

export default ParentComp;
