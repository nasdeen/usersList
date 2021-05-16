import React, { Component } from "react";

class CountScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  handleCalculator = (e) => {
    e.preventDefault();
    this.setState({ score: this.state.score + 1 });
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "yellow" }}>
          <h1>Calculate:{this.state.score} </h1>
        </div>

        <button className="btn btn-primary" onClick={this.handleCalculator}>
          Calculate
        </button>
      </div>
    );
  }
}
export default CountScore;
