import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import axios from "axios"
// axios.defaults.baseURL = "https://thawing-anchorage-36314.herokuapp.com";
// axios.defaults.headers.post["Content-Type"]= "application/json"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
