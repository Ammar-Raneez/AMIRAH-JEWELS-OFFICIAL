import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	const [aboutUsClicked, setAboutUsClicked] = useState(false);
	const [productsClicked, setProductsClicked] = useState(false);

	return (
		<div className="header">
			<div className="header__options">
				<Link to="/">HOME</Link>
				<div>
					<Link
						onClick={() => {
							setAboutUsClicked(!aboutUsClicked);
							setProductsClicked(false);
						}}
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
				<div>
					<Link
						onClick={() => {
							setProductsClicked(!productsClicked);
							setAboutUsClicked(false);
						}}
					>
						PRODUCTS
					</Link>
					{productsClicked && (
						<div className="header__optionsProductDetails">
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Shop by Category</Link>
								<Link to="/necklace+pendants">Necklaces & Pendants</Link>
								<Link to="/bracelets">Bracelets</Link>
								<Link to="/earrings">Earrings</Link>
								<Link to="/rings">Rings</Link>
								<Link to="/engagement+ring">Engagement Rings</Link>
							</div>
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Shop by Metal / Sapphire Stones</Link>
								<Link to="/blue+sapphires">Blue Sapphires</Link>
								<Link to="/yellow+sapphires">Yellow Sapphires</Link>
								<Link to="/pink+sapphires">Pink Sapphires</Link>
								<Link to="/orange+sapphires">Purple Sapphires</Link>
								<Link to="/purple+sapphires">Orange Sapphires</Link>
								<Link to="/teal+sapphires">Teal Sapphires</Link>
								<Link to="/white+sapphires">White Sapphires</Link>
								<Link to="/padparadscha+sapphires">Padparadscha Sapphires</Link>
							</div>
						</div>
					)}
				</div>
				<Link to="/process">PROCESS</Link>
			</div>
		</div>
	);
}

export default Header;
