const initialState = {
  users: [
    { name: "John", email: "john@nas.com" },
    { name: "Ama", email: "ama@nas.com" },
    { name: "Amina", email: "amina@nas.com" },
    { name: "Ayisha", email: "ayisha@nas.com" },
  ],
};

// const addUser = store.dispatch({ type: "ADD USER" });

const usersReducer = (state = initialState, action) => {
  switch (action.typ) {
    case "ADD USER":
      const newUser = { name: this.state.name, email: this.state.email };
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }

  //   if (action.type === "ADD USER") {
  //     const newUser = { name: this.state.name, email: this.state.email };
  //     return { ...state, users: [...state.users, newUser] };
  //   }
  //   return state;
};
export default usersReducer;
