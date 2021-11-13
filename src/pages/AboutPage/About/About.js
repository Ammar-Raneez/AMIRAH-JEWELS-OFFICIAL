import React from 'react';
import './AboutPage.css';
import { Fade } from 'react-awesome-reveal';
import SEO from '../../../shared/components/SEO/SEO';

function About({
	seoTitle,
	title,
	firstPara,
	secondHeader,
	secondSubHeader,
	secondFirstPara,
	secondSecondPara,
	secondThirdPara,
	readMoreLink
}) {
	const readMore = () => {
		window.open(readMoreLink);
	}

	return (
	<div className="aboutPageCompany">
		<SEO title={seoTitle} />
		<div className="aboutPageCompanyTop">
			<Fade direction="left">
				<div className="aboutPageCompanyTop__middleContent">
					<h2>{title}</h2>
					<p>{firstPara}</p>
				</div>
			</Fade>
		</div>
		<Fade direction="down">
			<div className="aboutPageCompanyMiddle">
				<p className="aboutPageCompanyMiddleFirst"></p>
				<p className="aboutPageCompanyMiddleMiddle"></p>
				<p className="aboutPageCompanyMiddleLast"></p>
			</div>
		</Fade>
		{secondHeader && (
			<Fade direction="right">
				<div className="aboutPageCompanyLast">
					<h2>{secondHeader}</h2>
					<h2>{secondSubHeader}</h2>
					<p>{secondFirstPara}</p>
					<p>{secondSecondPara}</p>
					<p>{secondThirdPara}</p>
				</div>
			</Fade>
		)}

		<Fade direction="right">
			<button className="aboutus_link-btn" onClick={readMore}>Read Full Document</button>
		</Fade>
	</div>
	);
}

export default About
