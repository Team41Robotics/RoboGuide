import React from "react";
import {ReactSVG} from "react-svg";
import {css} from "glamor";
import {useSelector} from "react-redux";

export default function(props) {
	const src = props.src;
	const darkStyles = props.darkStyles || {};
	const lightStyles = props.lightStyles || {};

	const darkMode = useSelector(state => state.darkMode);
	const styles = !darkMode ? css(lightStyles) : css(darkStyles);

	return <ReactSVG src={src} {...styles} />;
}
