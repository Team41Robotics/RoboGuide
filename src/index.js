import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import "./css/monokai.css";

// JS library imports
import "jquery";
import "popper.js";
import "bootstrap";

ReactDOM.render(
	<Router basename="/">
		<App />
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
