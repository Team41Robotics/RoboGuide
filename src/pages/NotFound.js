import React from "react";
import { Helmet } from "react-helmet";

import teek from "../img/sadTeek.png";

export default function(props) {
	return (
		<>
			<Helmet>
				<title>Not Found</title>
			</Helmet>
			<div className="d-flex flex-column align-items-center">
					<h1>Uh Oh! Page not found :(</h1>
					<img src={teek} width="300px"/>
					<h1><a href="/" target="_self">Go Home</a></h1>
			</div>
		</>
	);
}
