import './AboutPageCompany.css';

function AboutPageCharity() {
	return (
		<div className="aboutPageCompany">
			<div className="aboutPageCompanyTop">
				{/* jewel image */}
				<div className="aboutPageCompanyTop__firstJewel">
					<img src="purple-sapphire.png" alt="" />
				</div>

				<div className="aboutPageCompanyTop__middleContent">
					<h2>CHARITY</h2>
					<p>
						Every story has a beginning. Discover how Amirah Gems began in 2020 and grew into a global design house at
						the forefront of innovative jewelry design and expert craftsmanship.
					</p>
				</div>

				{/* jewel image */}
				<div className="aboutPageCompanyTop__lastJewel">
					<img src="purple-sapphire.png" alt="" />
				</div>
			</div>
			<div className="aboutPageCompanyMiddle">
				<p className="aboutPageCompanyMiddleFirst"></p>
				<p className="aboutPageCompanyMiddleMiddle"></p>
				<p className="aboutPageCompanyMiddleLast"></p>
			</div>
			<div className="aboutPageCompanyLast">
				<h2>2020</h2>
				<h2>THE JOURNEY</h2>
				<p>
					An icon for a new era, Amirah Gems debuts. It captures the courage, strength and optimism that Amirah stands
					for.
				</p>
				<p>
					Our founder, Suhail Mahmud is a Sri Lankan entrepreneur and designer that founded the company that builds
					exceptional jewelry
				</p>
				<p>Amirah Gems starts manufacturing jewelry designs, making luxury available to Sri Lankans and the world.</p>
			</div>
		</div>
	);
}

export default AboutPageCharity;
