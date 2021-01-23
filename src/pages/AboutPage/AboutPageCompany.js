import './AboutPageCompany.css';

function AboutPageCompany() {
	return (
		<div className="aboutPageCompany">
			<div className="aboutPageCompanyTop">
				{/* jewel image */}
				<div className="aboutPageCompanyTop__firstJewel">
					<img src="purple-sapphire.png" alt="" />
				</div>

				<div className="aboutPageCompanyTop__middleContent">
					<h2>AMIRAH GEMS</h2>
					<p>
						Every story has a beginning. Discover how Amirah Gems began in 2020 and grew into a global design house at
						the forefront of innovative jewelry design and expert craftsmanship
					</p>
				</div>

				{/* jewel image */}
				<div className="aboutPageCompanyTop__lastJewel">
					<img src="purple-sapphire.png" alt="" />
				</div>
			</div>
			<div className="aboutPageCompanyMiddle"></div>
			<div className="aboutPageCompanyLast"></div>
		</div>
	);
}

export default AboutPageCompany;
