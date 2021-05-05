import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// const reactEl = <h3 jeff={15}>hi</h3>;
// console.log(reactEl.props.jeff);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
