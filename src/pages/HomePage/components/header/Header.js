import { BrowserRouter, Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className="header">
			<div className="header__options">
				<BrowserRouter>
					<Link>HOME</Link>
					<Link>ABOUT US</Link>
					<Link>PRODUCTS</Link>
					<Link>PROCESS</Link>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default Header;
