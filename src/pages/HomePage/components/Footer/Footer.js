import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__main">
				<div className="footer__top">
					<div className="footer__leftSection">
						<div className="footer__leftSectionTop">
							<p>Products</p>
							<Link to="/">Necklaces & Pendants</Link>
							<Link to="/">Earrings</Link>
							<Link to="/">Rings</Link>
							<Link to="/">Bracelets</Link>
							<Link to="/">Engagement Rings</Link>
						</div>
						<div className="footer__leftSectionDown">
							<p>Follow us on:</p>
							<Link to="/">Instagram</Link>
							<Link to="/">Facebook</Link>
						</div>
					</div>
					<div className="footer__middleSection">
						<p>About Us</p>
						<Link to="/">Company</Link>
						<Link to="/">Charity</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Blog</Link>
					</div>
					<div className="footer__rightSection">
						<p>Latest by Amirah Gems</p>
						<p className="footer__rightSectionDescription">
							Be the first to know about exciting new designs, special events, store openings and much more.
						</p>
						<form>
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />
							<button>SIGN UP</button>
						</form>
					</div>
				</div>
				<div className="footer__bottom">© AmirahGems. 2021</div>
			</div>
		</div>
	);
}

export default Footer;
