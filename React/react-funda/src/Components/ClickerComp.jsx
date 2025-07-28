import React, { Component } from "react";
import hocWrapper from "../Utils/ClickerHOC";

class ClickerComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <button onClick={incrementCount}> {this.props.name} clicked {count} times</button>
      </div>
    );
  }
}

export default hocWrapper(ClickerComp,5);
