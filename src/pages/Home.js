import React from "react";
import {Helmet} from "react-helmet";

import Card from "../components/Card.js";
import Icon from "../components/Icon.js";

import laptop from "../img/laptop.svg";
import javaBanner from "../img/banners/javaBanner.svg";
import robotCodeBanner from "../img/banners/robotCodeBanner.jpg";
import hardwareBanner from "../img/banners/hardwareBanner.jpg";
import driverstationBanner from "../img/banners/driverstationBanner.svg";

import solderHand from "../img/solderingIronWithHand.svg";
import electricalBanner from "../img/banners/electricalBanner.png";

import "../css/Home.css";

export default function (props) {
	return (
		<>
			<Helmet>
				<title>Home | RoboGuide</title>
			</Helmet>
			<div id="home-content">
				<div id="home-title" className="text-center mt-5 mb-3">
					What do you want to learn?
				</div>
				<div id="home-row-nav" className="mb-3 text-center">
					<button className="btn">
						<a href="#programming" target="_self">
							Programming
						</a>
					</button>
					<button className="btn">
						<a href="#electrical" target="_self">
							Electrical
						</a>
					</button>
				</div>
				<div id="programming" className="row mx-0 mx-md-3 p-3 rounded">
					<div className="col-12 col-lg-3 d-flex flex-column align-items-center">
						<h1>Programming</h1>
						<img src={laptop} className="img-fluid" alt="laptop" />
					</div>
					<div className="col-12 col-lg-9 mx-auto px-0 px-md-3 card-deck">
						<Card
							bannerImg={javaBanner}
							title="Java Guide"
							footerText="Go Now!"
							footerLink="/java"
						>
							Learn about the fundamentals of Java, the language Team 41 uses to
							program their robots!
						</Card>
						<Card
							bannerImg={robotCodeBanner}
							title="Robot Code Guide"
							footerText="Go Now!"
							footerLink="/robot-code"
						>
							Learn about how to code an FRC robot! (Requires Java experience)
						</Card>
						<Card
							bannerImg={hardwareBanner}
							title="Hardware Guide"
							footerText="Go Now!"
							footerLink="/robot-hardware"
						>
							Learn about the sensors and actuators that make the robot work!
						</Card>
						<Card
							bannerImg={driverstationBanner}
							title="Driver Station Guide"
							footerText="Go Now!"
							footerLink="/driver-station"
						>
							Learn about how to create and program the controls for the robot!
						</Card>
					</div>
				</div>
				<div id="electrical" className="row mx-0 mx-md-3 p-3 rounded">
					<div className="col-12 col-lg-3 d-flex flex-column align-items-center">
						<h1>Electrical</h1>
						{/* <img
							src={solderHand}
							className="img-fluid"
							alt="hand holding soldering iron"
						/> */}
						<Icon name="solderingIronWithHand" size={100} fill="#23098a" />
					</div>
					<div className="col-12 col-lg-9 mx-auto px-0 px-md-3 card-deck">
						<Card
							bannerImg={electricalBanner}
							title="Electrical Basics"
							footerText="Go Now!"
							footerLink="/electrical-basics"
						>
							Learn the basics of wiring and soldering, the fundamentals of
							electric engineering!
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
