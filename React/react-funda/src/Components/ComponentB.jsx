import React, { Component } from "react";
import { UserConsumer } from "../Utils/ContextProvider";
export class ComponentB extends Component {
  render() {
    return (
      <div>

        <UserConsumer>{(val) => <h1>Hello {val}</h1>}</UserConsumer>
      </div>
    );
  }
}

export default ComponentB;
