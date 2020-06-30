import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import $ from "jquery";

import {ReactComponent as DriverStationSVG} from "../img/banners/driverstationBanner.svg";

const StyledSVG = styled(DriverStationSVG)`
	display: block;
	margin: auto;
	margin-bottom: 15px;
	height: 25em;

	.cls-14.ds-btn {
		cursor: pointer;
	}
	.cls-14.ds-btn:not(.active):hover {
		opacity: 0.9;
	}
	.cls-14.ds-btn.active {
		opacity: 0.3;
	}
	.cls-8.ds-toggle-top,
	.cls-8.ds-toggle-bottom {
		cursor: pointer;
	}
	.cls-8.ds-toggle-top:hover,
	.cls-8.ds-toggle-bottom:hover,
	.cls-8.ds-toggle-top.hover,
	.cls-8.ds-toggle-bottom.hover {
		fill: #d8ffde;
	}

	.cls-8.ds-toggle-top.active,
	.cls-8.ds-toggle-bottom.active,
	.cls-8.ds-toggle-top.active,
	.cls-8.ds-toggle-bottom.active {
		fill: #1be83c;
		/* fill: #9bffab; */
	}

	.ds-toggle-bottom-padding {
		cursor: pointer;
		opacity: 0;
	}

	.cls-22.slider {
		cursor: grab;
	}
`;

export default function(props) {
	const sliderMax = 312.88;
	const sliderMin = 173.15;
	const getSliderPercentage = y => (sliderMax - y) / (sliderMax - sliderMin);
	const sliderDefault = getSliderPercentage(297.75);
	const [addedTogglePadding, setAddedTogglePadding] = useState(false);

	const [controllerState, setControllerState] = useState({
		btn1: false,
		btn2: false,
		btn3: false,
		btn4: false,
		btn5: false,
		btn6: false,
		toggle1_up: false,
		toggle1_down: false,
		toggle2_up: false,
		toggle2_down: false,
		toggle3_up: false,
		toggle3_down: false,
		toggle4: false,
		toggle5: false,
		toggle6: false,
		slider1: sliderDefault,
		slider2: sliderDefault
	});

	// A whole lot of slider logic
	const [slidersActive, setSlidersActive] = useState({0: false, 1: false});
	const [sliderOffsetY, setSliderOffsetY] = useState(0);
	const sliderClasses = ["slider1", "slider2"];
	const ref = useRef(null);

	const getSliderNum = el =>
		$(el).hasClass(sliderClasses[0])
			? 0
			: $(el).hasClass(sliderClasses[1])
			? 1
			: null;

	const getMousePosition = event => {
		const CTM = ref.current.getScreenCTM();
		const evt = event.touches ? event.touches[0] : event;
		return {
			x: (evt.clientX - CTM.e) / CTM.a,
			y: (evt.clientY - CTM.f) / CTM.d
		};
	};

	const setYs = (els, newY, sliderNum) => {
		const y0 = parseFloat(els[0].attr("y"));
		const y1 = parseFloat(els[1].attr("y"));
		const transform = els[2].attr("transform");
		const y2 = parseFloat(transform.substring(17, transform.length - 13));

		let deltaY = newY - y0 - sliderOffsetY;
		if (y0 + deltaY > sliderMax || y0 + deltaY < sliderMin) deltaY = 0;

		setControllerState({
			...controllerState,
			["slider" + (sliderNum + 1)]: getSliderPercentage(y0 + deltaY)
		});

		els[0].attr("y", y0 + deltaY);
		els[1].attr("y", y1 + deltaY);
		els[2].attr(
			"transform",
			transform.substring(0, 17) +
				(y2 + deltaY) +
				transform.substring(transform.length - 13)
		);
	};

	const startDrag = function(event) {
		const sliderNum = getSliderNum(this);
		setSlidersActive({...slidersActive, [sliderNum]: true});
		const y = parseFloat(
			$(".cls-22.slider." + sliderClasses[sliderNum]).attr("y")
		);
		setSliderOffsetY(getMousePosition(event).y - y);
	};
	const drag = function(event) {
		const sliderNum = slidersActive[0] ? 0 : slidersActive[1] ? 1 : null;
		if (sliderNum !== null) {
			if (!slidersActive[sliderNum]) return;
			event.preventDefault();
			setYs(
				[
					$(".cls-22.slider." + sliderClasses[sliderNum]),
					$(".cls-21.slider." + sliderClasses[sliderNum]),
					$(".cls-5.slider." + sliderClasses[sliderNum])
				],
				getMousePosition(event).y,
				sliderNum
			);
		}
	};
	const endDrag = function() {
		if (slidersActive[0] || slidersActive[1])
			setSlidersActive({0: false, 1: false});
	};

	// Some toggle stuff
	const getControllerKey = el => {
		const className = $(el).attr("class");
		return className.substring(className.indexOf(" ")).match(/\w*\d\b/)[0];
	};
	const getClassSelector = el =>
		"." +
		$(el)
			.attr("class")
			.replace(/\s/g, ".")
			.replace(".active", "");
	const getBottomFromPadding = el =>
		!$(el).hasClass("ds-toggle-bottom-padding")
			? [el, true]
			: [getClassSelector(el).replace("-padding", ""), false];

	// Event listeners for all SVG objects
	const eventListeners = {
		// Red buttons
		".cls-14.ds-btn.btn-red": {
			mousedown: function() {
				$(this).addClass("active");
				setControllerState({
					...controllerState,
					[getControllerKey(this)]: true
				});
			},
			"mouseup mouseleave": function() {
				$(this).removeClass("active");
				setControllerState({
					...controllerState,
					[getControllerKey(this)]: false
				});
			}
		},
		// Blue buttons
		".cls-14.ds-btn.btn-blue": {
			click: function() {
				$(this).toggleClass("active");
				setControllerState({
					...controllerState,
					[getControllerKey(this)]: $(this).hasClass("active")
				});
			}
		},
		// Sliders
		".cls-22.slider": {
			"mousedown touchstart": startDrag
		},
		body: {
			// Perhaps this should go under the slider?
			"mousemove touchmove": drag,
			"mouseup touchend touchcancel": endDrag
		},
		// Left toggles
		".cls-8.ds-toggle-left.ds-toggle-top, .cls-8.ds-toggle-left.ds-toggle-bottom-padding": {
			mousedown: function() {
				const [el, isTop] = getBottomFromPadding(this);
				$(el).addClass("active");
				setControllerState({
					...controllerState,
					[getControllerKey(this) + (isTop ? "_up" : "_down")]: true
				});
			},
			"mouseup mouseleave": function() {
				const [el, isTop] = getBottomFromPadding(this);
				$(el).removeClass("active");
				setControllerState({
					...controllerState,
					[getControllerKey(this) + (isTop ? "_up" : "_down")]: false
				});
			}
		},
		// Right toggles
		".cls-8.ds-toggle-right.ds-toggle-top, .cls-8.ds-toggle-right.ds-toggle-bottom-padding": {
			click: function() {
				const [el, isTop] = getBottomFromPadding(this);
				$(el).addClass("active");
				if (isTop)
					$(getClassSelector(el).replace("top", "bottom")).removeClass(
						"active"
					);
				else $(el.replace("bottom", "top")).removeClass("active");

				setControllerState({
					...controllerState,
					[getControllerKey(this) + (isTop ? "_up" : "_down")]: true,
					[getControllerKey(this) + (isTop ? "_down" : "_up")]: false
				});
			}
		}
	};
	useEffect(() => {
		// Add padding to bottom of toggles
		if (!addedTogglePadding) {
			$(".cls-8.ds-toggle-bottom").each(function() {
				let padding = $(this).clone();
				$(padding).attr("y", 105.33);
				$(padding).attr("height", 35);
				$(padding).hover(
					() => $(this).addClass("hover"),
					() => $(this).removeClass("hover")
				);
				$(padding).removeClass("ds-toggle-bottom");
				$(padding).addClass("ds-toggle-bottom-padding");
				$(this)
					.parent()
					.append(padding);
			});
			setAddedTogglePadding(true);
		}
		// Create event listeners
		for (const [selector, events] of Object.entries(eventListeners)) {
			for (const [eventName, callback] of Object.entries(events)) {
				$(selector).on(eventName, callback);
			}
		}
		// Remove event listeners
		return () => {
			for (const [selector, events] of Object.entries(eventListeners)) {
				Object.keys(events).forEach(eventName => {
					$(selector).off(eventName);
				});
			}
		};
	}, [addedTogglePadding, eventListeners]);
	return <StyledSVG ref={ref} />;
}
