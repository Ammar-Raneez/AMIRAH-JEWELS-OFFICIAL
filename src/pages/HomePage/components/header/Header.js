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
							<Link style={{ color: '#656565', fontWeight: '600' }}>Our Company</Link>
							<Link>Charity</Link>
							<Link>Careers</Link>
							<Link>Policy</Link>
						</div>
					)}
				</div>
				<Link
					onClick={() => {
						setProductsClicked(true);
						setAboutUsClicked(false);
					}}
				>
					PRODUCTS
				</Link>
				<Link to="/process">PROCESS</Link>
			</div>
		</div>
	);
}

export default Header;
