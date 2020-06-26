import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import teek from "../img/sadTeek.png";

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const updateMousePosition = ev => {
		setMousePosition({ x: ev.clientX, y: ev.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () => window.removeEventListener("mousemove", updateMousePosition);
	}, []);

	return mousePosition;
};

export default function(props) {
	const ref = useRef();
	const offset = ref.current
		? {
				left: ref.current.offsetLeft,
				top: ref.current.offsetTop,
				width: ref.current.offsetWidth,
				height: ref.current.offsetHeight
		  }
		: { left: null, top: null, width: null, height: null };

	const mouse = useMousePosition();

	const centerX = offset.left + offset.width / 2;
	const centerY = offset.top + offset.height / 2;
	const x = mouse.x - centerX;
	const y = mouse.y - centerY;
	const angleX = -y / offset.height / 2;
	const angleY = x / offset.width / 2;
	const maxAngle = 30;
	const rotateX =
		Math.sign(angleX) * Math.min(Math.abs(angleX), maxAngle).toFixed(2);
	const rotateY =
		Math.sign(angleY) * Math.min(Math.abs(angleY), maxAngle).toFixed(2);

	const imgStyle = {
		transform: "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)",
		boxShadow: "2px 2px 50px rgba(0, 0, 0, 0.9)",
		margin: "40px"
	};
	const headerStyle = {
		marginLeft: -100 * rotateY + "px"
	};
	const footerStyle = {
		marginRight: -100 * rotateY + "px"
	};

	return (
		<>
			<Helmet>
				<title>Not Found</title>
			</Helmet>
			<div
				className="d-flex flex-column align-items-center"
				style={{
					perspective: "40px"
				}}
			>
				<h1 style={headerStyle}>Uh oh! Page not found!</h1>
				<img
					src={teek}
					width="300px"
					id="teek404"
					ref={ref}
					alt="Sad Prateek"
					style={imgStyle}
				/>
				<h3 style={footerStyle}>
					Go <Link to="/">home</Link>.
				</h3>
			</div>
		</>
	);
}
