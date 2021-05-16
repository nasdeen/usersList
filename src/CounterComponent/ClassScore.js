import React, { Component } from "react";

class ClassScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  handleScore = (e) => {
    e.preventDefault();
    this.setState({ score: this.state.score + 1 });
  };
  render() {
    return (
      <div>
        <h1>ScoreLine: {this.state.score}</h1>
        <hr></hr>
        <button onClick={this.handleScore}>score</button>
      </div>
    );
  }
}
export default ClassScore;
