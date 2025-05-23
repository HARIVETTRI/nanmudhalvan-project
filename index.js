import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // ✅ This line is important
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
