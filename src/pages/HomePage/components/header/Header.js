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
						onMouseOver={() => {
							setProductsClicked(!productsClicked);
							setAboutUsClicked(false);
						}}
						className={productsClicked && 'header_optionsJewellery'}
					>
						Jewelry
					</Link>
					{productsClicked && (
						<div 
							className="header__optionsProductDetails"
						>
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Shop by Category</Link>
								<Link to="/rings">Rings</Link>
								<Link to="/earrings">Earrings</Link>
								<Link to="/bracelets">Bracelets</Link>
								<Link to="/necklace+pendants">Necklaces & Pendants</Link>
								<Link to="/explore+all+categories">Explore All Categories</Link>
							</div>
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Shop by Metal/Gemstones</Link>
								<Link to="/yellow+gold">Yellow Gold</Link>
								<Link to="/white+gold">White Gold</Link>
								<Link to="/rose+gold">Rose Gold</Link>
								<Link to="/diamonds">Diamonds</Link>
								<Link to="/blue+sapphires">Blue Sapphires</Link>
								<Link to="/pink+sapphires">Pink Sapphires</Link>
								<Link to="/pink+sapphires">Pearl Sapphires</Link>
								<Link to="/gemstones+metal">Explore More</Link>
							</div>
							<div>
								<Link style={{ color: '#656565', fontWeight: '600' }}>Featured Collections</Link>
								<Link to="/signature">Signature</Link>
								<Link to="/amarelo">Amarelo</Link>
								<Link to="/mi+amor">Mi Amor</Link>
								<Link to="/dew+drops">Dew Drops</Link>
								<Link to="/ombre">Ombre</Link>
								<Link to="/numero">Numero</Link>
								<Link to="/explore+all+collection">Explore All Collection</Link>
							</div>
						</div>
					)}
				</div>

				<Link to="/process">PROCESS</Link>

				<div>
					<Link
						onMouseOver={() => {
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

				<Link to="/">DESIGNER DESK</Link>

				<Link to="/highTea">HIGH TEA</Link>
			</div>
		</div>
	);
}

export default Header;
