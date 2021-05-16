import React from "react";

class StateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      name: "Nasirudeen",
    };
  }
  render() {
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h2>Number:{this.state.number}</h2>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default StateEvent;
