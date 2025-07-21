import React, { Component } from "react";
import "./Styles/common.css";
// import styles from './WelcomeClass.module.css'
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleSubmit(e) {
    console.log(this);
    
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  }

  render() {
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
            onChange={function (e){this.handleSubmit(e)}}
          />
          <p>{`Welcome user : ${this.state.email}`}</p>
        </div>
      </>
    );
  }
}

export default Welcome;
