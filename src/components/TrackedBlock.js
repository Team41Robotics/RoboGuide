import React from "react";

export default function (props) {
	const id = props.id;
	const children = props.children;
	const className = "jumbotron p-3";
	return (
		<div className={className} id={id}>
			{children}
		</div>
	);
}
