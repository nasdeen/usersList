import React, { Component } from "react";

class Secondclass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    // this.handleEvent = this.handleEvent.bind(this);
  }

  //   componentDidMount() {}

  //   componentDidUpdate(prevProps, prevState, snapshot) {
  //     if (prevState.name !== this.state.name) {
  //       this.handler();
  //     }
  //   }

  //   componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)
  handleCalculatorAdd = (e) => {
    e.preventDefault();
    this.setState({ number: this.state.number + 1 });
  };
  handleCalculatorMinus = (e) => {
    e.preventDefault();
    this.setState({ number: this.state.number - 1 });
  };

  // Class Properties (Stage 3 Proposal)
  //   handler = () => {
  //     this.setState();
  //   };

  render() {
    return (
      <div>
        <h1>Calculator : {this.state.number}</h1>
        <hr></hr>
        <button onClick={this.handleCalculatorAdd}>Increase</button>
        <button onClick={this.handleCalculatorMinus}>Decrease</button>
      </div>
    );
  }
}
export default Secondclass;
