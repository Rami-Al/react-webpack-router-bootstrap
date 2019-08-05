import React from "react";
import ReactDOM from "react-dom";
require("./../node_modules/bootstrap/dist/js/bootstrap.bundle");
require("./styles/main.scss");
import { HashRouter as Router, Route, Link } from "react-router-dom";

const $ = require("jquery");

import App from "./components/App.jsx";

const root = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, root);