import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className="header">
			<div className="header__options">
				<Link to="/">HOME</Link>
				<Link to="aboutus">ABOUT US</Link>
				<Link>PRODUCTS</Link>
				<Link>PROCESS</Link>
			</div>
		</div>
	);
}

export default Header;
