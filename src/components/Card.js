import React from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

export default function Card(props) {
	const footerText = props.footerText;
	const footerSize = props.footerSize;
	const footerLink = props.footerLink;
	var bannerImg = props.bannerImg;
	const bannerImgSrc = props.bannerImgSrc;
	const title = props.title;
	const children = props.children;

	if (!bannerImg && bannerImgSrc) {
		let bannerImgAlt;
		let bannerImgWords = bannerImgSrc.split("/");
		bannerImgAlt = bannerImgWords[bannerImgWords.length - 1].split(".")[0];
		bannerImg = (
			<img src={bannerImgSrc} alt={bannerImgAlt} className="card-img-top" />
		);
	}

	return (
		<div className="card">
			{bannerImg}
			<div className="card-body">
				{title && <h4 className="card-title">{title}</h4>}
				{children && <p className="card-text">{children}</p>}
			</div>
			{footerText && (
				<div className={"card-footer mb-0 h" + footerSize}>
					{footerLink ? <Link to={footerLink}>{footerText}</Link> : footerText}
				</div>
			)}
		</div>
	);
}

Card.propTypes = {
	bannerImgSrc: PropTypes.string,
	title: PropTypes.string,
	footerText: PropTypes.string,
	footerLink: PropTypes.string,
	footerSize: PropTypes.number
};
Card.defaultProps = {
	footerSize: 5
};
