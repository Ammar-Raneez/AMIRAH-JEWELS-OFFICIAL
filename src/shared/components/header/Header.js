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
						<span
							onMouseOver={() => {
								setProductsClicked(!productsClicked);
								setAboutUsClicked(false);
							}}
							style={{ cursor: 'pointer' }}
							className={productsClicked ? 'header_optionsJewellery': ''}
						>
							JEWELLERY
						</span>
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
						<span
							onMouseOver={() => {
								setAboutUsClicked(!aboutUsClicked);
								setProductsClicked(false);
							}}
							style={{ cursor: 'pointer' }}
							className={aboutUsClicked ? 'header_optionsJewellery': ''}
						>
							ABOUT US
						</span>
						{aboutUsClicked && (
							<div className="header__optionsAboutDetails">
								<Link style={{ color: '#656565', fontWeight: '600' }} to="/aboutus">
									OUR COMPANY
								</Link>
								<Link className="header__optionsProductDetail" to="/careers">
									<span>CAREERS</span>
								</Link>
								<Link className="header__optionsProductDetail" to="/policy">
									<span>POLICY</span>
								</Link>
								<Link className="header__optionsProductDetail" to="/terms-of-use">
									<span>TERMS OF USE</span>
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
