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
						Jewellery
					</Link>
					{productsClicked && (
						<div 
							className="header__optionsProductDetails"
						>
							<div>
								<p style={{ color: '#656565', fontWeight: '600' }}>Shop by Category</p>
								<Link className="header__optionsProductDetail" to="/rings">Rings</Link>
								<Link className="header__optionsProductDetail" to="/earrings">Earrings</Link>
								<Link className="header__optionsProductDetail" to="/bracelets">Bracelets</Link>
								<Link className="header__optionsProductDetail" to="/necklace+pendants">Necklaces & Pendants</Link>
								<Link style={{ color: '#656565', fontWeight: '600' }} className="header__optionsProductDetail" to="/explore+all+categories">Explore All Categories</Link>
							</div>
							<div>
								<p style={{ color: '#656565', fontWeight: '600' }}>Shop by Metal/Gemstones</p>
								<Link className="header__optionsProductDetail" to="/yellow+gold">Yellow Gold</Link>
								<Link className="header__optionsProductDetail" to="/white+gold">White Gold</Link>
								<Link className="header__optionsProductDetail" to="/rose+gold">Rose Gold</Link>
								<Link className="header__optionsProductDetail" to="/diamonds">Diamonds</Link>
								<Link className="header__optionsProductDetail" to="/blue+sapphires">Blue Sapphires</Link>
								<Link className="header__optionsProductDetail" to="/pink+sapphires">Pink Sapphires</Link>
								<Link className="header__optionsProductDetail" to="/pink+sapphires">Pearl Sapphires</Link>
								<Link style={{ color: '#656565', fontWeight: '600' }} className="header__optionsProductDetail" to="/gemstones+metal">Explore More</Link>
							</div>
							<div>
								<p style={{ color: '#656565', fontWeight: '600' }}>Featured Collections</p>
								<Link className="header__optionsProductDetail" to="/signature">Signature</Link>
								<Link className="header__optionsProductDetail" to="/amarelo">Amarelo</Link>
								<Link className="header__optionsProductDetail" to="/mi+amor">Mi Amor</Link>
								<Link className="header__optionsProductDetail" to="/dew+drops">Dew Drops</Link>
								<Link className="header__optionsProductDetail" to="/ombre">Ombre</Link>
								<Link className="header__optionsProductDetail" to="/numero">Numero</Link>
								<Link style={{ color: '#656565', fontWeight: '600' }} className="header__optionsProductDetail" to="/explore+all+collection">Explore All Collection</Link>
							</div>
						</div>
					)}
				</div>

				<Link to="/process">Process</Link>

				<div>
					<Link
						onMouseOver={() => {
							setAboutUsClicked(!aboutUsClicked);
							setProductsClicked(false);
						}}
						className={aboutUsClicked && 'header_optionsJewellery'}
					>
						About Us
					</Link>
					{aboutUsClicked && (
						<div className="header__optionsAboutDetails">
							<Link style={{ color: '#656565', fontWeight: '600' }} to="/aboutus">
								Our Company
							</Link>
							<Link className="header__optionsProductDetail" to="/charity">Charity</Link>
							<Link className="header__optionsProductDetail" to="/careers">Careers</Link>
							<Link className="header__optionsProductDetail" to="/policy">Policy</Link>
						</div>
					)}
				</div>

				<Link to="/">Designer Desk</Link>

				<Link to="/highTea">High Tea</Link>
			</div>
		</div>
	);
}

export default Header;
