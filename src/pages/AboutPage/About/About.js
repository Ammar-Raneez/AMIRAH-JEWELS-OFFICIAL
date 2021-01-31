import React from 'react'
import './AboutPage.css'

function About({ title, firstPara, secondHeader, secondSubHeader, secondFirstPara, secondSecondPara, secondThirdPara }) {
    return (
		<div className="aboutPageCompany">
			<div className="aboutPageCompanyTop">
				{/* jewel image */}
				<div className="aboutPageCompanyTop__firstJewel">
					<img src="aboutuspage/purple-sapphire.png" alt="" />
				</div>

				<div className="aboutPageCompanyTop__middleContent">
					<h2>{title}</h2>
					<p>{firstPara}</p>
				</div>

				{/* jewel image */}
				<div className="aboutPageCompanyTop__lastJewel">
					<img src="aboutuspage/purple-sapphire.png" alt="" />
				</div>
			</div>
			<div className="aboutPageCompanyMiddle">
				<p className="aboutPageCompanyMiddleFirst"></p>
				<p className="aboutPageCompanyMiddleMiddle"></p>
				<p className="aboutPageCompanyMiddleLast"></p>
			</div>
			<div className="aboutPageCompanyLast">
				<h2>{secondHeader}</h2>
				<h2>{secondSubHeader}</h2>
				<p>{secondFirstPara}</p>
				<p>{secondSecondPara}</p>
				<p>{secondThirdPara}</p>
			</div>
		</div>
    )
}

export default About
