import axios from "axios";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = "https://api.boardrank.kr";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
