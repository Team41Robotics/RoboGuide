import React, {useState} from "react";
import $ from "jquery";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

import "../css/BackToTopButton.css";

export default function (props) {
	const [display, setDisplay] = useState(false);
	const [visible, setVisible] = useState(false);

	useScrollPosition(({prevPos, currPos}) => {
		const scrollY = -currPos.y;
		if (scrollY > 200) {
			if (!visible) {
				setDisplay(true);
				setTimeout(() => setVisible(true), 100);
			}
		} else {
			if (visible) {
				setVisible(false);
				setTimeout(() => setDisplay(false), 300);
			}
		}
	});

	const backToTop = event => {
		event.preventDefault();
		// If the scroll-behavior isn't set to auto, there's a weird delay on browsers where it's supported
		$("html").css("scroll-behavior", "auto");
		$("html, body").animate({scrollTop: 0}, 500, () => {
			$("html").css("scroll-behavior", "smooth");
		});
	};

	return (
		<button
			className="btn d-lg-none b2t-btn"
			style={{
				display: display ? "initial" : "none",
				opacity: visible ? 1 : 0
			}}
			onClick={backToTop}
		>
			&uarr; Back to top
		</button>
	);
}
