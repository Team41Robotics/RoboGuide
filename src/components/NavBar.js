import React from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "../img/logo.png";

import "../css/NavBar.css";

const navPages = [
	{title: "Java Guide", path: "/java/"},
	{title: "Robot Code", path: "/robot-code/"},
	{title: "Robot Hardware", path: "/robot-hardware/"},
	{title: "Driver Station", path: "/driver-station/"},
	{title: "Electrical Basics", path: "/electrical-basics/"}
];

export default function (props) {
	const loc = useLocation();
	const activePath = loc.pathname + (loc.pathname.endsWith("/") ? "" : "/");

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark mt-n3 mx-n3"
			id="navbar"
		>
			<Link className="navbar-brand" to="/">
				RoboGuide
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					{navPages.map(page => (
						<li
							key={page.path}
							className={
								"nav-item" + (page.path === activePath ? " active" : "")
							}
						>
							<Link className="nav-link" to={page.path}>
								{page.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
