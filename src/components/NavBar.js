import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import $ from "jquery";
import ToggleSwitch from "./ToggleSwitch";
import {updateDarkMode} from "../redux/actions";

import "../css/NavBar.css";
import "../css/modal.css";

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
	useEffect(() => {
		var navbar = $(".navbar-collapse");
		// "a:not([data-toggle])" - to avoid issues caused
		// when you have dropdown inside navbar
		navbar.on("click", "a:not([data-toggle])", null, function () {
			navbar.collapse("hide");
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
				<div className="row w-100 mx-0">
					<div className="col-10">
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
					<div className="col-2 pr-0 d-flex">
						<ul className="navbar-nav ml-auto">
							<li
								className="nav-item p-2 rounded"
								style={{
									display: "flex",
									alignItems: "center",
									backgroundColor: "var(--accent)",
									cursor: "pointer"
								}}
							>
								<svg
									width="1.5em"
									height="1.5em"
									viewBox="0 0 16 16"
									fill="var(--page-background)"
									xmlns="http://www.w3.org/2000/svg"
									data-toggle="modal"
									data-target="#settingsModal"
								>
									<path
										fillRule="evenodd"
										d="M14 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM4.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9.5 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM11.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
									/>
									<path
										fillRule="evenodd"
										d="M9.5 4H0V3h9.5v1zM16 4h-2.5V3H16v1zM9.5 14H0v-1h9.5v1zm6.5 0h-2.5v-1H16v1zM6.5 9H16V8H6.5v1zM0 9h2.5V8H0v1z"
									/>
								</svg>

								{/* <!-- Modal --> */}
								<div
									className="modal fade"
									id="settingsModal"
									tabIndex="-1"
									role="dialog"
									aria-labelledby="settingsModalLabel"
									aria-hidden="true"
								>
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="settingsModalLabel">
													Settings & About
												</h5>
											</div>
											<div className="modal-body">
												<div className="mb-1">Dark Mode</div>
												<ToggleSwitch value={darkMode} setValue={setDarkMode} />
												<br />
												<br />
												<h3>About</h3>
												<p>
													This site is maintained by James Narayanan and Peter
													Linder. Content contributions made by James Narayanan,
													Peter Linder, Mason DiGiorgio, and Eliana Sussner.
													Created for use by FRC team 41.
												</p>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn"
													data-dismiss="modal"
												>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
