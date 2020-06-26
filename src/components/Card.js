import React from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

export default class Card extends React.Component {
	render() {
		let footerClass;
		if(this.props.footerText)
			footerClass = "card-footer h" + this.props.footerSize;
		let bannerImgAlt;
		if(this.props.bannerImg) {
			let bannerImgWords = this.props.bannerImg.split("/");
			bannerImgAlt = bannerImgWords[bannerImgWords.length - 1].split(".")[0];
		}

		return (
			<div className="card">
				{this.props.bannerImg && <img src={this.props.bannerImg} alt={bannerImgAlt} className="card-img-top"/>}
				<div className="card-body">
					{this.props.title && <h4 className="card-title">{this.props.title}</h4>}
					{this.props.children && <p className="card-text">{this.props.children}</p>}
				</div>
				{this.props.footerText &&
					<div className={footerClass}>
						{this.props.footerLink ? 
							<Link to={this.props.footerLink}>{this.props.footerText}</Link>
							: <>{this.props.footerText}</>
						}
					</div>
				}
			</div>
		);
	}
}

Card.propTypes = {
	bannerImg: PropTypes.string,
	title: PropTypes.string,
	bodyText: PropTypes.string,
	footerText: PropTypes.string,
	footerLink: PropTypes.string,
	footerSize: PropTypes.number
};
Card.defaultProps = {
	footerSize: 5
};