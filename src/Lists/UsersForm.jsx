import React, { Component } from "react";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { name: this.state.name, email: this.state.email };
    this.props.addUser(newUser);
    //store
    this.setState({ name: "", email: "" }); //refresh
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="yourname@website.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input name="submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default UsersForm;
