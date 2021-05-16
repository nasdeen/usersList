import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCounterIncrease = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };
  handleCounterDecrease = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Counter:{this.state.count}</h1>
        <hr></hr>
        <button onClick={this.handleCounterIncrease}>Increase</button>
        <button onClick={this.handleCounterDecrease}>Decrease</button>
      </div>
    );
  }
}

export default CounterClass;
