import './Footer.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { auth, db } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';

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

				// user logged in only we load the details for the particular user
				db.collection('users').onSnapshot((snapshot) =>
					snapshot.docs.forEach((doc) => {
						if (doc.id === user?.email) {
							// adding the cart items
							for (const cartItem of doc.data().cart) {
								console.log('Adding items from the database into the cart');
								dispatch({
									type: 'ADD_TO_BASKET',
									item: {
										productCost: cartItem.productCost,
										productImgURL: cartItem.productImgURL,
										productName: cartItem.productName,
										productQuantity: cartItem.productQuantity,
									},
								});
							}

							// adding the wishlist items
							for (const wishlistItem of doc.data().wishlist) {
								console.log('Adding items from the database into the wishlist');

								dispatch({
									type: 'ADD_TO_WISHLIST',
									item: {
										name: wishlistItem.name,
										cost: wishlistItem.cost,
										imgURL: wishlistItem.imgURL,
									},
								});
							}
						}
					})
				);
				//----------------------------------------
				setTimeout(() => {
					alert('Welcome ' + auth.user.displayName + '!');
				}, 1000);

				history.replace('/');
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
