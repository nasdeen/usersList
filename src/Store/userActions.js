import usersReducer from "./usersReducer";

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};
