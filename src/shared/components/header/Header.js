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
								<Link className="header__optionsProductDetail" to="/rings"><span>Rings</span></Link>
								<Link className="header__optionsProductDetail" to="/earrings"><span>Earrings</span></Link>
								<Link className="header__optionsProductDetail" to="/bracelets"><span>Bracelets</span></Link>
								<Link className="hidden header__optionsProductDetail" to="/necklace+pendants"><span>Necklaces & Pendants</span></Link>
								<Link style={{ color: '#656565', fontWeight: '600' }} className="header__optionsProductDetail" to="/explore+all+categories"><span>Explore All Categories</span></Link>
							</div>
							<div>
								<p style={{ color: '#656565', fontWeight: '600' }}>Shop by Metal/Gemstones</p>
								<Link className="hidden header__optionsProductDetail" to="/yellow+gold"><span>Yellow Gold</span></Link>
								<Link className="hidden header__optionsProductDetail" to="/white+gold"><span>White Gold</span></Link>
								<Link className="hidden header__optionsProductDetail" to="/rose+gold"><span>Rose Gold</span></Link>
								<Link className="hidden header__optionsProductDetail" to="/diamonds"><span>Diamonds</span></Link>
								<Link className="header__optionsProductDetail" to="/blue+sapphires"><span>Blue Sapphires</span></Link>
								<Link className="header__optionsProductDetail" to="/pink+sapphires"><span>Pink Sapphires</span></Link>
								<Link className="header__optionsProductDetail" to="/pink+sapphires"><span>Pearl Sapphires</span></Link>
								<Link style={{ color: '#656565', fontWeight: '600' }} className="header__optionsProductDetail" to="/gemstones+metal"><span>Explore More</span></Link>
							</div>
							<div>
								<p style={{ color: '#656565', fontWeight: '600' }}>Featured Collections</p>
								<Link className="hidden header__optionsProductDetail" to="/signature"><span>Signature</span></Link>
								<Link className="hidden header__optionsProductDetail" to="/amarelo"><span>Amarelo</span></Link>
								<Link className="hidden header__optionsProductDetail" to="/mi+amor"><span>Mi Amor</span></Link>
								<Link className="header__optionsProductDetail" to="/dew+drops"><span>Dew Drops</span></Link>
								<Link className="header__optionsProductDetail" to="/ombre"><span>Ombre</span></Link>
								<Link className="header__optionsProductDetail" to="/numero"><span>Numero</span></Link>
								<Link style={{ color: '#656565', fontWeight: '600' }} className="header__optionsProductDetail" to="/explore+all+collection"><span>Explore All Collection</span></Link>
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
							<Link className="header__optionsProductDetail" to="/charity"><span>Charity</span></Link>
							<Link className="header__optionsProductDetail" to="/careers"><span>Careers</span></Link>
							<Link className="header__optionsProductDetail" to="/policy"><span>Policy</span></Link>
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
