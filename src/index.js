import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SearchContextProvider } from "./Context/SearchContext";
import searchReducer, { initialState } from "./Context/SearchReducer";
ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider initialState={initialState} reducer={searchReducer}>
      <App />
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
