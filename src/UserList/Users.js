import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      users: [],
    };
  }
  handleName = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newUser = { name: this.state.name, email: this.state.email };
    this.setState({ users: [...this.state.users, newUser] });
    this.setState({ name: "", email: "" });
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
            onChange={this.handleName}
          />
          <input
            name="email"
            type="email"
            placeholder="example yourname@ghana.com"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <input name="submit" type="submit" />
        </form>
        {/* display list of users */}

        <div>
          {this.state.users.map((eachPerson, index) => {
            return (
              <UserItem
                key={index}
                name={eachPerson.name}
                email={eachPerson.email}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
