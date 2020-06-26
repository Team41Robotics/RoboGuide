import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function Card(props) {
	const footerText = props.footerText;
	const footerSize = props.footerSize;
	const footerLink = props.footerLink;
	const bannerImg = props.bannerImg;
	const title = props.title;
	const children = props.children;

	let bannerImgAlt;
	if (bannerImg) {
		let bannerImgWords = bannerImg.split("/");
		bannerImgAlt = bannerImgWords[bannerImgWords.length - 1].split(".")[0];
	}

	return (
		<div className="card">
			{bannerImg && (
				<img src={bannerImg} alt={bannerImgAlt} className="card-img-top" />
			)}
			<div className="card-body">
				{title && <h4 className="card-title">{title}</h4>}
				{children && <p className="card-text">{children}</p>}
			</div>
			{footerText && (
				<div className={"card-footer h" + footerSize}>
					{footerLink ? <Link to={footerLink}>{footerText}</Link> : footerText}
				</div>
			)}
		</div>
	);
}

Card.propTypes = {
	bannerImg: PropTypes.string,
	title: PropTypes.string,
	footerText: PropTypes.string,
	footerLink: PropTypes.string,
	footerSize: PropTypes.number
};
Card.defaultProps = {
	footerSize: 5
};
