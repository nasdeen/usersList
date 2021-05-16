import React from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import AddMultiply from "./AddMultiply";
import CountScore from "./CountScore";
import ClassScore from "./CounterComponent/ClassScore";
import FunctionScore from "./CounterComponent/FunctionScore";
import SecondFunction from "./CounterComponent/SecondFunction";
import SecondClass from "./CounterComponent/SecondClass";
import StateEvent from "./CounterComponent/StateEvent";
import UserItem from "./UserList/UserItem";
import UsersProfile from "./Lists/UsersProfile";
import UserId from "./Lists/UserId";

const App = () => {
  return (
    <div ClassName="App">
      <UsersProfile />
      <UserId />
      {/* <StateEvent /> */}
      {/* <Users />
      <UserItem /> */}

      {/* <SecondClass /> */}
      {/* <SecondFunction /> */}
      {/* <FunctionScore /> */}
      {/* <ClassScore /> */}
      {/* <CountScore /> */}
      {/* <CounterFunction />
      <CounterClass />
      <AddMultiply /> */}
    </div>
  );
};

export default App;
