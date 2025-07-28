import React, { Component } from "react";

import { getData } from "../services/axios";
class FetchData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  async componentDidMount() {
    getData()
      .then((data) => this.setState({ user: data }))

      .catch((e) => console.log(e.message));
  }

  render() {
    const count = this.state.user.length;

    return count > 0 ? (
      <>
        <ul>
          <p>Total number of user :{count} </p>
          {this.state.user.map((data) => {
            return (
              <li key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
                <span>owned by userId :{data.userId}</span>
              </li>
            );
          })}
        </ul>
      </>
    ) : (
      "Empty list"
    );
  }
}

export default FetchData;

