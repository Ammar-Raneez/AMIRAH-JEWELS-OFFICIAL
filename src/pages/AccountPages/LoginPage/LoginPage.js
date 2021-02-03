import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import './LoginPage.css';

function LoginPage() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [{ user }, dispatch] = useStateValue();

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
				setTimeout(() => {
					alert('Welcome ' + auth.user.displayName + '!');
				}, 1000);

				history.replace('/');
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="loginPage">
			<div className="loginPage__leftSide">
				<div className="loginPage__leftSideTop">
					<p className="loginPage__title">SIGN IN</p>
					<p className="loginPage__subTitle">Please sign in to your Amirah account</p>
				</div>
				<div className="loginPage__leftSideBottom">
					<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<button onClick={signIn}>SIGN IN</button>
				</div>
			</div>
			<div className="loginPage__rightSide">
				<div className="loginPage__rightSideTop">
					<p className="loginPage__title">CREATE AN ACCOUNT</p>
					<p className="loginPage__subTitle">
						Save time during checkout, view your shopping bag and saved items from any device and access your order
						history.
					</p>
				</div>
				<div className="loginPage__rightSideBottom">
					<button>REGISTER NOW</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
