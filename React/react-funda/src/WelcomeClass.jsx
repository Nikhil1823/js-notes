import React, { Component } from "react";
import "./Styles/common.css";
// import styles from './WelcomeClass.module.css'
class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log("constructor of child component called");
    this.state = {
      email: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    state.email=props.name
    console.log("getderived state from props");
    return state
  }
  handleSubmit(e) {
    console.log(this);

    this.setState({ email: e.target.value });
    console.log(this.state.email);
  }
  componentDidMount() {
    console.log("compoemtn mounted from child");
  }
  render() {
    console.log("from render methods");
    return (
      <>
        <div className="input-field">
          <label htmlFor="" className="text">
            Email :{" "}
          </label>
          <input
            type="email"
            name=""
            id=""
            value={this.state.email}
            onChange={(e) => {
              this.handleSubmit(e);
            }}
          />
          <p>{`Welcome user : ${this.state.email}`}</p>
        </div>
      </>
    );
  }
}

export default Welcome;
