import React from "react";

export default function (props) {
	const backToTop = event => {
		event.preventDefault();
		window.scrollTo(0, 0);
	};

	return (
		<button
			className="btn d-lg-none"
			style={{
				position: "fixed",
				bottom: "0.5rem",
				left: "2.5%",
				width: "95%",
				height: "3rem",
				backgroundColor: "var(--accent)",
				color: "var(--page-background)",
				fontSize: "larger"
			}}
			onClick={backToTop}
		>
			&uarr; Back to top
		</button>
	);
}
