import React, { useState, useEffect, useLayoutEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import $ from "jquery";
import TrackedBlock from "../components/TrackedBlock";

import "../css/TrackedBlockPage.css";

function getLeftShift(scrollY, id) {
	// Slide content-col over to make room for toc
	if (window.innerWidth >= 1200) {
		const contentCol = $("#content-col-" + id);
		const colCenter =
			parseFloat(contentCol.css("margin-left"), 10) +
			contentCol.outerWidth() / 2;
		const diff = window.innerWidth / 2 - colCenter;
		return diff - scrollY / 2 > 0 ? diff - scrollY / 2 : 0;
	} else {
		return 0;
	}
}

export default function(props) {
	const blocks = props.blocks;
	const id = props.id;
	const header = props.header;

	const [tocStyle, setTocStyle] = useState({
		opacity: 0,
		visibility: "hidden"
	});
	const [left, setLeft] = useState(0);
	const [lastScrollY, setLastScrollY] = useState(0);

	const findScrollHeight = block => {
		const top = $("#" + block.id).offset().top;
		let scrollHeights = [];
		scrollHeights.push({ id: block.id, top: top });
		if (block.children) {
			block.children.forEach(subblock => {
				scrollHeights = scrollHeights.concat(...findScrollHeight(subblock));
			});
		}
		return scrollHeights;
	};

	const getScrollHeights = () => {
		let scrollHeights = [];
		blocks.forEach(block => {
			scrollHeights = [...scrollHeights, ...findScrollHeight(block)];
		});
		return scrollHeights;
	};

	useLayoutEffect(() => {
		setLeft(getLeftShift(0, id));
	}, [id]);

	useScrollPosition(({ prevPos, currPos }) => {
		const scrollY = -currPos.y;
		setLastScrollY(scrollY);
		// Make smooth fade in on scroll
		const opac = scrollY <= 500 ? scrollY / 500 : 1;
		setTocStyle({
			opacity: opac,
			visibility: opac === 0 ? "hidden" : "visible"
		});
		setLeft(getLeftShift(scrollY, id));
		// Scroll spy - inefficient for now
		const scrollHeights = getScrollHeights().reverse();
		const currentId = scrollHeights.find(x => x.top - 80 <= scrollY);
		$("li.toc-entry > a").removeClass("active");
		if (currentId) {
			$('li.toc-entry > a[href="#' + currentId.id + '"]').addClass("active");
		}
	});

	useEffect(() => {
		const handleResize = function() {
			setLeft(getLeftShift(lastScrollY, id));
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<>
			<div className="text-center">{header}</div>
			<div className="row">
				<div
					className="col-12 col-md-10 col-lg-8 mx-auto"
					id={"content-col-" + id}
					style={{ left: left }}
				>
					{blocks.map(block => (
						<TrackedBlock key={block.id} id={block.id}>
							{block.content}
						</TrackedBlock>
					))}
				</div>
				<div
					className="d-none d-xl-block col-xl-2 bd-toc"
					id={"toc-" + id}
					style={tocStyle}
				>
					<ul className="section-nav">
						<li className="toc-entry toc-h2">
							<a target="_self" href="#">
								Back to Top
							</a>
						</li>
						{blocks.map(block => TocLink(block))}
					</ul>
				</div>
			</div>
		</>
	);
}

function TocLink(block) {
	return (
		<li key={block.id} className="toc-entry toc-h3">
			<a target="_self" href={"#" + block.id}>
				{block.title}
			</a>
			{block.children && (
				<ul>{block.children.map(subblock => TocLink(subblock))}</ul>
			)}
		</li>
	);
}
