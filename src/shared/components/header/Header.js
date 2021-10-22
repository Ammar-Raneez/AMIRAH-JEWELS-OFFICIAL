import { ClickAwayListener } from '@material-ui/core';
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

				<ClickAwayListener
					mouseEvent="onMouseDown"
					touchEvent="onTouchStart"
					onClickAway={() => setProductsClicked(false)}
				>
					<div>
						<Link
							onMouseOver={() => {
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
									<p style={{ color: '#656565', fontWeight: '600' }}>SHOP BY CATEGORY</p>
									<Link className="header__optionsProductDetail" to="/all-rings">
										<span>RINGS</span>
									</Link>
									<Link className="header__optionsProductDetail" to="/earrings">
										<span>EARRINGS</span>
									</Link>
									<Link className="header__optionsProductDetail" to="/bracelets">
										<span>BRACELETS</span>
									</Link>
									<Link
										className="header__optionsProductHidden header__optionsProductDetail"
										to="/necklace+pendants"
									>
										<span>NECKLACES & PENDANTS</span>
									</Link>
									<Link
										style={{ color: '#656565', fontWeight: '600' }}
										className="header__optionsProductDetail"
										to="/explore+all+categories"
									>
										<span>EXPLORE ALL CATEGORIES</span>
									</Link>
									<Link
										style={{ color: '#656565', fontWeight: '600' }}
										className="header__optionsProductDetail header__optionsProductDetailSpecial"
										to="/gemstones+metal"
									>
										<span>SHOP BY GEMSTONES</span>
									</Link>
								</div>
								<div>
									<p style={{ color: '#656565', fontWeight: '600' }}>SHOP BY COLLECTION</p>
									<Link
										className="header__optionsProductHidden header__optionsProductDetail"
										to="/solitarates"
									>
										<span>SOLITARATES</span>
									</Link>
									<Link
										className="header__optionsProductHidden header__optionsProductDetail"
										to="/eternity"
									>
										<span>ETERNITY</span>
									</Link>
								</div>
							</div>
						)}
					</div>
				</ClickAwayListener>

				<Link to="/processes">PROCESS</Link>

				<ClickAwayListener
					mouseEvent="onMouseDown"
					touchEvent="onTouchStart"
					onClickAway={() => setAboutUsClicked(false)}
				>
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
									OUR COMPANY
								</Link>
								<Link className="header__optionsProductDetail" to="/charity">
									<span>CHARITY</span>
								</Link>
								<Link className="header__optionsProductDetail" to="/careers">
									<span>CAREERS</span>
								</Link>
								<Link className="header__optionsProductDetail" to="/policy">
									<span>POLICY</span>
								</Link>
							</div>
						)}
					</div>
				</ClickAwayListener>

				<Link to="/designer+desk">DESIGNER DESK</Link>
			</div>
		</div>
	);
}

export default Header;
