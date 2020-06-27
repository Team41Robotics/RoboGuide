import React from "react";
import { Helmet } from "react-helmet";
import TrackedBlockPage from "./TrackedBlockPage";

import electricalBanner from "../img/banners/electricalBanner.png";

export default function(props) {
	return (
		<>
			<Helmet>
				<title>Electrical Basics | RoboGuide</title>
			</Helmet>
			<TrackedBlockPage
				id="electrical-basics"
				header={
					<>
						<h1>Electrical Basics</h1>
						<img
							src={electricalBanner}
							className="img-fluid rounded w-50 mb-5"
							alt="Java logo"
						/>
					</>
				}
				blocks={[
					{
						id: "general-knowledge",
						title: "General Knowledge",
						content: (
							<>
								<h1 className="text-center">General Knowledge</h1>
								<ul style={{ fontSize: "larger" }}>
									<li>
										When using wires, <b style={{color: "red"}}>RED</b> wires are used for voltage and are positive,
										while <b style={{color: "black"}}>BLACK</b> and <b style={{color: "#007bff"}}>BLUE</b> wires are used for ground and are negative.
										This is very important to remember, as reversing the <a href="https://en.wikipedia.org/wiki/Electrical_polarity">polarity</a> when
										connecting things together can result in circuitry being fried.
									</li>
									<li>
										Signal wires, or the wires used to communicate code, can be <b style={{color: "white"}}>WHITE</b>,
										<b style={{color: "yellow"}}>YELLOW</b>, or <b style={{color: "#28e428"}}>GREEN</b>.
									</li>
									<li>
										Almost all electrical components (excluding VRM and pneumatics components) are connected through a signal wire loop.
										This is called a CAN loop.
									</li>
									<li>
										One of the main jobs for electrical team members is <a href="https://en.wikipedia.org/wiki/Soldering">soldering</a>,
										which is the process of joining two wires together
										with a tin and led wire called <a href="https://en.wikipedia.org/wiki/Solder">solder</a> using
										a hot metal device called a <a href="https://en.wikipedia.org/wiki/Soldering_iron">soldering iron</a>.
										When soldering, it’s important to never touch the metal when the soldering iron is on and always tie back hair when in use.
									</li>
									<li>
										Batteries will have two wires extending from the base. Do not pick up the battery by these wires! Always pick them up from the bottom.
									</li>
								</ul>
							</>
						)
					},
					{
						id: "soldering",
						title: "Soldering",
						content: (
							<>
								<h1 className="text-center">Soldering</h1>
								<ul>
									<li>
										Always remember to not touch the metal of the soldering iron once it’s plugged in!
									</li>
									<li>
										Try holding the soldering iron like how you would a pencil when soldering
									</li>
									<li>
										If you have long hair, tie it back
									</li>
									<li>
										When soldering, smoke will come off of your solder. This is normal, but try to lean back so as to breathe in as little as possible (remember, this gas has lead in it!)
									</li>
								</ul>
							</>
						)
					}
				]}
			/>
		</>
	);
}