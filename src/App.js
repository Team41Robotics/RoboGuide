import React, {useLayoutEffect} from "react";
import $ from "jquery";
import {Switch, Route, withRouter} from "react-router-dom";
import "./css/App.css";

import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import JavaGuide from "./pages/JavaGuide";
import RobotCode from "./pages/RobotCode";
import RobotHardware from "./pages/RobotHardware";
import DriverStation from "./pages/DriverStation";
import ElectricalBasics from "./pages/ElectricalBasics";

function App({location}) {
	useLayoutEffect(() => {
		setTimeout(() => {
			[$("body"), $("a"), $(".btn")].map(el => {
				el.css("transition", "0.6s");
			});
		}, 200);
	});

	return (
		<div className="App">
			<NavBar />
			<div className="Page">
				<Switch location={location}>
					<Route exact path="/" component={Home} />

					<Route exact path="/java" component={JavaGuide} />
					<Route exact path="/robot-code" component={RobotCode} />
					<Route exact path="/robot-hardware" component={RobotHardware} />
					<Route exact path="/driver-station" component={DriverStation} />
					<Route exact path="/electrical-basics" component={ElectricalBasics} />

					<Route component={NotFound} />
				</Switch>
			</div>
		</div>
	);
}

export default withRouter(App);
