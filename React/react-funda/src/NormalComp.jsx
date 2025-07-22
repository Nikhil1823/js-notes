import React, { Component } from "react";

class NormalComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    console.log("normal component re rendered");

    return (
      <div>
        <h1>THis is a Normal Compoennt {this.props.name}</h1>
        <input type="text" name="" id="" ref={this.inputRef} />
      </div>
    );
  }
}

export default NormalComp;