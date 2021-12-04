import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import size from "styles/size";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = "https://api.boardrank.kr";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={size}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
