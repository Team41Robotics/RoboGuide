import React from "react";
import {Helmet} from "react-helmet";

import Card from "../components/Card.js";

import laptop from "../img/laptopGreen.svg";
import javaBanner from "../img/banners/javaBanner.svg";
import robotCodeBanner from "../img/banners/robotCodeBanner.jpg";
import hardwareBanner from "../img/banners/hardwareBanner.jpg";

import solderHand from "../img/solderingIronWithHandGreen.svg";
import electricalBanner from "../img/banners/electricalBanner.png";

import "../css/Home.css";

export default function (props) {
	return (
		<>
			<Helmet>
				<title>Home | RoboGuide</title>
			</Helmet>
			<div id="home-content">
				<div id="home-title" className="text-center my-5">
					What do you want to learn?
				</div>
				<div className="row mx-3 p-3 rounded">
					<div className="col-12 col-lg-3 d-flex flex-column align-items-center">
						<h1>Programming</h1>
						<img src={laptop} className="img-fluid" alt="laptop" />
					</div>
					<div className="col-12 col-lg-9 card-deck">
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
							bannerImg={hardwareBanner}
							title="Driver Station Guide"
							footerText="Go Now!"
							footerLink="/robot-code"
						>
							Learn about how to create and program the controls for the robot!
						</Card>
					</div>
				</div>
				<div className="row mx-3 p-3 rounded">
					<div className="col-12 col-lg-3 d-flex flex-column align-items-center">
						<h1>Electrical</h1>
						<img
							src={solderHand}
							className="img-fluid"
							alt="hand holding soldering iron"
						/>
					</div>
					<div className="col-12 col-lg-9 card-deck">
						<Card
							bannerImg={electricalBanner}
							title="Electrical Basics"
							footerText="Go Now!"
							footerLink="/electrical-basics"
						>
							Learn about the fundamentals of wiring and soldering, the
							fundamentals of electric engineering!
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
