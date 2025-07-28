import React, { Component } from "react";

export class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(err) {
    if (err) {
      return { hasError: true };
    }
  }
  componentDidCatch(err,info){
    console.log('erroe here ',err);
    console.log('info here ',info)
    
  }
  render() {
    if (this.state.hasError) {
      return <h2>Oops you fallback into a error</h2>;
    }
    return this.props.children;
  }
}

export default ErrorHandler;
