import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	const [aboutUsClicked, setAboutUsClicked] = useState(false);
	const [productsClicked, setProductsClicked] = useState(false);

	return (
		<div className="header">
			<div className="header__options">
				<div>
					<Link
						onClick={() => {
							setProductsClicked(!productsClicked);
							setAboutUsClicked(false);
						}}
						className={productsClicked && 'header_optionsJewellery'}
					>
						JEWELLERY
					</Link>
					{productsClicked && (
						<div className="header__optionsProductDetails">
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Shop by Category</Link>
								<Link to="/rings">Rings</Link>
								<Link to="/earrings">Earrings</Link>
								<Link to="/bracelets">Bracelets</Link>
								<Link to="/necklace+pendants">Necklaces & Pendants</Link>
								<Link to="/">Explore All Categories</Link>
								{/* <Link to="/engagement+ring">Engagement Rings</Link> */}
							</div>
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Shop by Metal/Gemstones</Link>
								<Link to="/yellow+sapphires">Yellow Sapphires</Link>
								<Link to="/white+sapphires">White Sapphires</Link>
								<Link to="/rose+sapphires">Rose Sapphires</Link>
								<Link to="/diamonds">Diamonds</Link>
								<Link to="/blue+sapphires">Blue Sapphires</Link>
								<Link to="/pink+sapphires">Pink Sapphires</Link>
								<Link to="/pink+sapphires">Pearl Sapphires</Link>
								<Link to="/">Explore More</Link>

								{/* <Link to="/orange+sapphires">Purple Sapphires</Link>
								<Link to="/purple+sapphires">Orange Sapphires</Link>
								<Link to="/teal+sapphires">Teal Sapphires</Link>
								<Link to="/padparadscha+sapphires">Padparadscha Sapphires</Link> */}
							</div>
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Featured Collections</Link>
								<Link to="/">Signature</Link>
								<Link to="/">Amarelo</Link>
								<Link to="/">Mi Amor</Link>
								<Link to="/">Dew Drops</Link>
								<Link to="/">Ombre</Link>
								<Link to="/">Numero</Link>
								<Link to="/">Explore All Collection</Link>

								{/* <Link to="/orange+sapphires">Purple Sapphires</Link>
								<Link to="/purple+sapphires">Orange Sapphires</Link>
								<Link to="/teal+sapphires">Teal Sapphires</Link>
								<Link to="/padparadscha+sapphires">Padparadscha Sapphires</Link> */}
							</div>
						</div>
					)}
				</div>

				<Link to="/process">PROCESS</Link>

				<div>
					<Link
						onClick={() => {
							setAboutUsClicked(!aboutUsClicked);
							setProductsClicked(false);
						}}
						className={aboutUsClicked && 'header_optionsJewellery'}
					>
						ABOUT US
					</Link>
					{aboutUsClicked && (
						<div className="header__optionsAboutDetails">
							<Link style={{ color: '#656565', fontWeight: '600' }} to="/aboutus">
								Our Company
							</Link>
							<Link to="/charity">Charity</Link>
							<Link to="/careers">Careers</Link>
							<Link to="/policy">Policy</Link>
						</div>
					)}
				</div>

				<Link to="/">DESIGNESR DESK</Link>

				<Link to="/highTea">HIGH TEA</Link>
			</div>
		</div>
	);
}

export default Header;
