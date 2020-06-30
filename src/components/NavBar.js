import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import $ from "jquery";
import ToggleSwitch from "./ToggleSwitch";
import {updateDarkMode} from "../redux/actions";

import "../css/NavBar.css";

const navPages = [
	{title: "Java Guide", path: "/java/"},
	{title: "Robot Code", path: "/robot-code/"},
	{title: "Robot Hardware", path: "/robot-hardware/"},
	{title: "Driver Station", path: "/driver-station/"},
	{title: "Electrical Basics", path: "/electrical-basics/"}
];

export default function (props) {
	const dispatch = useDispatch();
	const loc = useLocation();
	const activePath = loc.pathname + (loc.pathname.endsWith("/") ? "" : "/");

	const darkMode = useSelector(state => state.darkMode);
	const setDarkMode = val => updateDarkMode(dispatch, val);

	useEffect(() => {
		if (darkMode) $("body").addClass("dark");
		else $("body").removeClass("dark");
	}, [darkMode]);
	useEffect(() => {
		window.matchMedia("(prefers-color-scheme: dark)").addListener(event => {
			setDarkMode(event.matches);
		});
	});

	return (
		<nav
			className={
				"navbar navbar-expand-lg mt-n3 mx-n3 " +
				(darkMode ? "navbar-dark" : "navbar-light")
			}
			id="navbar"
		>
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
			<Link className="navbar-brand" to="/">
				RoboGuide
			</Link>
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
				<ul className="navbar-nav ml-auto">
					<li
						className="nav-item"
						style={{display: "flex", alignItems: "center"}}
					>
						<ToggleSwitch value={darkMode} setValue={setDarkMode} />
						<span style={{marginLeft: "0.5rem"}}>Dark Mode</span>
					</li>
				</ul>
			</div>
		</nav>
	);
}
