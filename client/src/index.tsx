import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
