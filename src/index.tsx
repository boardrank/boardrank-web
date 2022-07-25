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
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import ReactGA from "react-ga";

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICKS_TRACKING_ID;
ReactGA.initialize(TRACKING_ID as string);

axios.defaults.baseURL = "https://api.boardrank.kr";
axios.defaults.withCredentials = true;

const store = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={size}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
