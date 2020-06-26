import React from "react";
import { Helmet } from "react-helmet";

import laptop from "../img/laptop.png";
import javaBanner from "../img/banners/javaBanner.png";
import robotCodeBanner from "../img/banners/robotCodeBanner.jpg";
import hardwareBanner from "../img/banners/hardwareBanner.jpg";

import "../css/Home.css";
import { Link } from "react-router-dom";

export default function(props) {
	return (<>
		<Helmet>
			<title>Home | RoboGuide</title>
		</Helmet>
		<div id="home-content">
			<div id="home-title" className="text-center my-5">What do you want to learn?</div>
			<div className="row mx-3 p-3 rounded">
				<div className="col-12 col-lg-4 d-flex flex-column align-items-center">
					<h1>Programming</h1>
					<img src={laptop} className="img-fluid"/>
				</div>
				<div className="col-12 col-lg-8 card-group">
					<div className="card">
						<img src={javaBanner} className="card-img-top mb-n2"/>
						<div className="card-body">
							<h4 className="card-title">Java Guide</h4>
							<p className="card-text">
								Learn about the fundamentals of Java, the language team 41 uses to program their robots!
							</p>
						</div>
						<h5 className="card-footer">
							<Link to="/java">Go Now!</Link>
						</h5>
					</div>
					<div className="card">
						<img src={robotCodeBanner} className="card-img-top"/>
						<div className="card-body">
							<h4 className="card-title">Robot Code Guide</h4>
							<p className="card-text">
								Learn about how to code an FRC robot! (Requires Java experience)
							</p>
						</div>
						<h5 className="card-footer">
							<Link to="/robot-code">Go Now!</Link>
						</h5>
					</div>
					<div className="card">
						<img src={hardwareBanner} className="card-img-top"/>
						<div className="card-body">
							<h4 className="card-title">Driverstation Guide</h4>
							<p className="card-text">
								Learn about how to create and program the controls for the robot!
							</p>
						</div>
						<h5 className="card-footer">
							<Link to="/robot-hardware">Go Now!</Link>
						</h5>
					</div>
					<div className="card">
						<img src={hardwareBanner} className="card-img-top"/>
						<div className="card-body">
							<h4 className="card-title">Hardware Guide</h4>
							<p className="card-text">
								Learn about the hardware we use to control the robot!
							</p>
						</div>
						<h5 className="card-footer">
							<Link to="/driver-station">Go Now!</Link>
						</h5>
					</div>
				</div>
			</div>
		</div>
	</>);
}
