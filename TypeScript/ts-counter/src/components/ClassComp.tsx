import { Component } from "react";

type stateProp = {
  count: number;
};
type propProp = {
  age: number;
};
export class ClassComp extends Component<{}, stateProp> {
  constructor(props: propProp) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            return this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default ClassComp;
