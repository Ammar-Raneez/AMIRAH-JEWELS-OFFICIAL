import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import './LoginPage.css';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

function LoginPage() {
	const history = useHistory();
	const formRef = useRef("form");
	const [dialogOpen, setDialogOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [{ user }, dispatch] = useStateValue();

	const signIn = (e) => {
		e.preventDefault();

		if (!email || !password) {
			return;
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
			.catch(setDialogOpen(!dialogOpen));
	};

	return (
		<div className="loginPage">
			<div className="loginPage__leftSide">
				<div className="loginPage__leftSideTop">
					<p className="loginPage__title">SIGN IN</p>
					<p className="loginPage__subTitle">Please sign in to your Amirah account</p>
				</div>
				<div className="loginPage__leftSideBottom">
					<ValidatorForm onSubmit={signIn} ref={formRef} className="loginPage__form">
						<TextValidator 
							style={{ width: '90%' }} 
							type="email" 
							label="Email"
							name="email" 
							onChange={(e) => setEmail(e.target.value)} 
							value={email} 
							errorMessages="Please add an email"
							validators={['required', 'isEmail']}
						/>
						<TextValidator 
							style={{ width: '90%' }} 
							type="password" 
							label="Password" 
							name="password"
							onChange={(e) => setPassword(e.target.value)} 
							value={password} 
							errorMessages="Please add a password"
							validators={['required']}	
						/>
						<button type="submit">SIGN IN</button>
					</ValidatorForm>
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
					<a href="/register"><button>REGISTER NOW</button></a>
				</div>
			</div>
			<Dialog
				open={dialogOpen}
				onClose={() => setDialogOpen(!dialogOpen)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Invalid Credentials"}</DialogTitle>
				<DialogContent>
				<DialogContentText id="alert-dialog-description">
					The details provided are incorrect, it is either because
					there is no such Account or the email/password is incorrect.
				</DialogContentText>
				</DialogContent>
				<DialogActions>
				<Button onClick={() => setDialogOpen(!dialogOpen)} color="primary">
					Retry
				</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default LoginPage;
