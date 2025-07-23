import React, { Component } from "react";
import ComponentB from "./ComponentB";
import { UserProvider } from "../Utils/ContextProvider";

export class ComponentA extends Component {
  render() {
    return (
      
        <ComponentB />
      
    );
  }
}

export default ComponentA;
