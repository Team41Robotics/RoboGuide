var contentCol, colCenter;

$(document).ready(event => {
	let toc = $("#toc"); // Table of contents
	let opac = window.scrollY <= 500 ? window.scrollY / 500 : 100;
	toc.css({
		opacity: opac
	});

	contentCol = $("#content-col");
	colCenter = contentCol.offset().left + contentCol.outerWidth()/2; // Length from left side of screen to center of col
	if(window.innerWidth >= 1200) { // Window is XL
		let diff = window.innerWidth/2 - colCenter;
		let shift = diff - window.scrollY/2 > 0 ? diff - window.scrollY/2 : 0;
		contentCol.css({
			left: shift
		});
	}
});

$(window).resize(event => {
	colCenter = contentCol.offset().left + contentCol.outerWidth()/2; // Length from left side of screen to center of col
	if(window.innerWidth >= 1200) {
		let diff = window.innerWidth/2 - colCenter;
		let shift = diff - window.scrollY/2 > 0 ? diff - window.scrollY/2 : 0;
		contentCol.css({
			left: shift
		});
	}
	else {
		contentCol.css({
			left: 0
		});
	}
});

$(document).scroll(event => {
	let toc = $("#toc");
	let opac = window.scrollY <= 500 ? window.scrollY / 500 : 100;
	toc.css({
		opacity: opac
	});

	if(window.innerWidth >= 1200) {
		let diff = window.innerWidth/2 - colCenter;
		let shift = diff - window.scrollY/2 > 0 ? diff - window.scrollY/2 : 0;
		contentCol.css({
			left: shift
		});
	}
	else {
		contentCol.css({
			left: 0
		});
	}
});