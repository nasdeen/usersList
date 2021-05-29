import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import usersReducer from "./Store/usersReducer";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

const store = createStore(usersReducer, applyMiddleware(thunk));
// const createDispatch = store.dispatch({ type: "SET USERNAME" });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
