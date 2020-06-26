import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		$("html").css("scroll-behavior", "auto");
		window.scrollTo(0, 0);
		$("html").css("scroll-behavior", "smooth");
	}, [pathname]);

	return null;
}
