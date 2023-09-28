import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";

import "./index.css";

import App from "./components/app/app.jsx";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
