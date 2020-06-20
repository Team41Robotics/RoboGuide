var toc, contentCol, colCenter;

$(document).ready(event => {
	toc = $("#toc"); // Table of contents
	let opac = window.scrollY <= 500 ? window.scrollY / 500 : 100;
	toc.css({
		opacity: opac
	});

	contentCol = $("#content-col");
	colCenter = contentCol.offset().left + contentCol.outerWidth()/2; // Length from left side of screen to center of col
	slideAndFade();
});

$(window).resize(event => {
	colCenter = contentCol.offset().left + contentCol.outerWidth()/2; // Length from left side of screen to center of col
	slideAndFade();
});

$(document).scroll(event => {
	let opac = window.scrollY <= 500 ? window.scrollY / 500 : 100;
	toc.css({
		opacity: opac
	});

	slideAndFade();
});

function slideAndFade() {
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
}

// To make popovers work:
$(function () {
	$('[data-toggle="popover"]').popover({ trigger: "hover" });
});