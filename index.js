var tocs = {}, contentCols = {}, colCenters = {};

$(function () {
	let opac = window.scrollY <= 500 ? window.scrollY / 500 : 100;
	let keys = ["java", "frc"];
	keys.forEach(key => {
		tocs[key] = $(`#toc-${key}`); // Table of contents
		contentCols[key] = $(`#content-col-${key}`);
		tocs[key].css({
			opacity: opac,
			visibility: opac == 0 ? "hidden" : "visible"
		});

		// Fixes weird adjustment that happens while java tab isn't active
		$(`#nav-${key}-tab`).on('shown.bs.tab', function (e) {
			colCenters = getColCenters();
			slide();
		});
	});
	colCenters = getColCenters();
	slide();

	// Necessary to make popovers work
	$('[data-toggle="popover"]').popover({ trigger: "hover" });
});

$(window).resize(event => {
	colCenters = getColCenters();
	slide();
});

$(document).scroll(event => {
	let opac = window.scrollY <= 500 ? window.scrollY / 500 : 100;
	for(let key in tocs) {
		tocs[key].css({
			opacity: opac,
			visibility: opac == 0 ? "hidden" : "visible"
		});
	}

	slide();
});

/** Gets length from left side of screen to center of cols */ 
function getColCenters() {
	let centers = {};
	for(let key in tocs) {
		centers[key] = parseFloat(contentCols[key].css("margin-left"), 10) + contentCols[key].outerWidth()/2;
	}
	return centers;
}

/** Slides content col over to make room for toc */
function slide() {
	if(window.innerWidth >= 1200) {
		for(let key in tocs) {
			let diff = window.innerWidth/2 - colCenters[key];
			let shift = diff - window.scrollY/2 > 0 ? diff - window.scrollY/2 : 0;
			contentCols[key].css({
				left: shift
			});
		}
	}
	else {
		for(let key in tocs) {
			contentCols[key].css({
				left: 0
			});
		}
	}
}