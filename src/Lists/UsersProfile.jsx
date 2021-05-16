import React, { Component } from "react";
import UserId from "./UserId";
import UsersForm from "./UsersForm";

class UsersProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { name: "John", email: "john@nas.com" },
        { name: "Ama", email: "ama@nas.com" },
        { name: "Amina", email: "amina@nas.com" },
        { name: "Ayisha", email: "ayisha@nas.com" },
      ],
    };

    // this.handleEvent = this.handleEvent.bind(this)
  }

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  // componentWillUnmount() {

  // }

  // // Prototype methods, Bind in Constructor (ES2015)
  // handleEvent() {}

  // Class Properties (Stage 3 Proposal)

  handleName = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };
  handleEmail = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };
  addNewUser = (newUser) => {
    // let newUser = { name: this.state.name, email: this.state.email };
    this.setState({ users: [...this.state.users, newUser] }); //store
  };

  render() {
    return (
      <div>
        <UsersForm addUser={this.addNewUser} />
        {/* display list of of user */}
        <div>
          {this.state.users.map((user, index) => {
            return <UserId key={index} name={user.name} email={user.email} />;
          })}
        </div>
      </div>
    );
  }
}
export default UsersProfile;
