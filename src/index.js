import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers.js";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import * as serviceWorker from "./serviceWorker";

// Syntax highlighter
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-arduino";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "./css/prism.css";

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

// JS library imports
import "jquery";
import "popper.js";
import "bootstrap";

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Router basename="/">
			<ScrollToTop />
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
