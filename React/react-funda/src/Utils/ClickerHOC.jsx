import React, { Component } from "react";

const hocWrapper = (OrginalComp,incrementVal) => {
  class ClickerHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prev) => {
        return {
          count: prev.count + incrementVal,
        };
      });
    };
    render() {
      return (
        <OrginalComp
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        ></OrginalComp>
      );
    }
  }
  return ClickerHOC;
};
export default hocWrapper;
