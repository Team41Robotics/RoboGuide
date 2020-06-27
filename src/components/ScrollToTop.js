import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";

export default function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (hash.length === 0) {
			$("html").css("scroll-behavior", "auto");
			window.scrollTo(0, 0);
			$("html").css("scroll-behavior", "smooth");
		}
	}, [hash.length, pathname]);

	return null;
}
