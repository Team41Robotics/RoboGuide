import React from "react";
import { Helmet } from "react-helmet";

import Card from "../components/Card.js";

import laptop from "../img/laptop.png";
import javaBanner from "../img/banners/javaBanner.png";
import robotCodeBanner from "../img/banners/robotCodeBanner.jpg";
import hardwareBanner from "../img/banners/hardwareBanner.jpg";

import "../css/Home.css";

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
					<img src={laptop} className="img-fluid" alt="laptop"/>
				</div>
				<div className="col-12 col-lg-8 card-group">
					<Card 
						bannerImg={javaBanner}
						title="Java Guide"
						footerText="Go Now!"
						footerLink="/java"
					>
						Learn about the fundamentals of Java, the language team 41 uses to program their robots!
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
						title="Driverstation Guide"
						footerText="Go Now!"
						footerLink="/robot-code"
					>
						Learn about how to create and program the controls for the robot!
					</Card>
					<Card 
						bannerImg={hardwareBanner}
						title="Hardware Guide"
						footerText="Go Now!"
						footerLink="/robot-hardware"
					>
						Learn about the hardware we use to control the robot!
					</Card>
				</div>
			</div>
		</div>
	</>);
}