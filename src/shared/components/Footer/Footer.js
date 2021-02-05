import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import './Footer.css';

function Footer() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	const signIn = (e) => {
		e.preventDefault();

		if (!email || !password) {
			return alert('Please enter Email and Password');
		}

		// sign in logic
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				// signed in, redirect to the homepage
				setEmail('');
				setPassword('');

				// setting the user into the react context API
				dispatch({
					type: 'SET_USER',
					user: auth.user,
				});

				// setTimeout(() => {
				// 	alert('Welcome ' + auth.user.displayName + '!');
				// }, 1000);

				history.replace('/');

				setTimeout(() => {
					window.location.reload(true);
				}, 2000);

			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="footer">
			<div className="footer__main">
				<div className="footer__top">
					<div className="footer__leftSection">
						<div className="footer__leftSectionTop">
							<p>Products</p>
							<a href="/necklace+pendants">Necklaces & Pendants</a>
							<a href="/earrings">Earrings</a>
							<a href="/rings">Rings</a>
							<a href="/bracelets">Bracelets</a>
							<a href="/engagement+rings">Engagement Rings</a>
						</div>
						<div className="footer__leftSectionDown">
							<p>Follow us on:</p>
							<a rel="noreferrer" href="https://www.instagram.com/amirahgems/" target="_blank">Instagram</a>
							<a rel="noreferrer" href="https://www.facebook.com/amirahgems" target="_blank">Facebook</a>
						</div>
					</div>
					<div className="footer__middleSection">
						<p>About Us</p>
						<a href="/aboutus">Company</a>
						<a href="/charity">Charity</a>
						<a href="/careers">Careers</a>
						<a href="/policy">Policy</a>
					</div>
					<div className="footer__rightSection">
						<p>Latest by Amirah Gems</p>
						<p className="footer__rightSectionDescription">
							Be the first to know about exciting new designs, special events, store openings and much more.
						</p>
						<form>
							<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
							<input
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
							<button onClick={signIn}>SIGN UP</button>
						</form>
					</div>
				</div>
				<div className="footer__bottom">© AmirahGems. 2021</div>
			</div>
		</div>
	);
}

export default Footer;
