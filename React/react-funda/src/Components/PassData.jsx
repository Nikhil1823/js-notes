import React, { Component } from "react";
import { passData } from "../services/axios";
class PassData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      title: "",
      userId: "",
      success: false,
      error: false,
    };
    this.titleRef = React.createRef();
    this.bodyRef = React.createRef();
    this.userIdRef = React.createRef();
  }
  submitForm = () => {
    if (
      !this.fetchValue(this.bodyRef.current.value) ||
      !this.fetchValue(this.titleRef.current.value) ||
      !this.fetchValue(this.userIdRef.current.value)
    ) {
      alert("enter complete details to update the user info");
    } else {
      this.setState(
        {
          body: this.fetchValue(this.bodyRef.current.value),
          title: this.fetchValue(this.titleRef.current.value),
          userId: this.fetchValue(this.userIdRef.current.value),
        },
        () => this.makeApiCall(this.state)
      );
    }
  };
  componentDidMount() {
    this.userIdRef.current.focus();
  }
  componentDidUpdate(prevProp, prevState) {
    if (this.state.success && !prevState.success) {
      alert("data passed successfully");
      this.setState({ sucess: false, error: false });
    }
    if (this.state.error && !prevState.error) {
      alert("error happened while contacting external API");
      this.setState({ success: false, error: false });
    }
  }
  fetchValue = (element) => {
    console.log("got thevalue ", element);

    if (element.length > 0) {
      return element;
    }
    return null;
  };
  
  makeApiCall = (data) => {
    passData(data)
      .then((res) => {
        console.log("success", res);
        this.setState({ success: true });
      })
      .catch((e) => this.seState({ error: true }));
  };
  render() {
    return (
      <div>
        <div className="userId">
          <label htmlFor="">Enter your userId </label>
          <input type="text" name="" id="" ref={this.userIdRef} />
        </div>
        <div className="title">
          <label htmlFor="">Enter the title :</label>
          <input type="text" name="" id="" ref={this.titleRef} />
        </div>
        <div className="body">
          <label htmlFor="">Enter the body :</label>
          <input type="text" name="" id="" ref={this.bodyRef} />
        </div>

        <button className="submit" type="submit" onClick={this.submitForm}>
          Submit
        </button>
      </div>
    );
  }
}

export default PassData;
