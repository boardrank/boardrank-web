import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import size from "styles/size";
import rootReducer from "_redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

axios.defaults.baseURL = "https://api.boardrank.kr";
axios.defaults.withCredentials = true;

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={size}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
