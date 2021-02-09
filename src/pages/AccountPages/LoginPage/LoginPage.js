import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import './LoginPage.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import SEO from '../../../shared/components/SEO/SEO';

function LoginPage() {
	const history = useHistory();
	const formRef = useRef('form');
	const [dialogOpen, setDialogOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [forgetEmail, setForgetEmail] = useState('');
	const [password, setPassword] = useState('');
	const [{ user }, dispatch] = useStateValue();
	const [forgetPasswordOpen, setForgetPasswordOpen] = useState(false);

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

	// Forget password implementation (using firebase)
	const forgetPassword = () => {
		setForgetPasswordOpen(!forgetPasswordOpen);

		auth
			.sendPasswordResetEmail(forgetEmail)
			.then((res) => {
				alert('Please check your email');
				setForgetEmail('');
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="loginPage">
			<SEO title="Login" />
			<div className="loginPage__leftSide">
				<div className="loginPage__leftSideTop">
					<p className="loginPage__title">SIGN IN</p>
					<p className="loginPage__subTitle">Please sign in to your Amirah account</p>
				</div>
				<div className="loginPage__leftSideBottom">
					<ValidatorForm onSubmit={signIn} ref={formRef} className="loginPage__form">
						<TextValidator
							style={{ width: '90%' }}
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
						<button type="submit">Sign In</button>
					</ValidatorForm>
					<button onClick={() => setForgetPasswordOpen(!forgetPasswordOpen)}>Forgot Password?</button>
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
					<a href="/register">
						<button>Register</button>
					</a>
				</div>
			</div>
			<Dialog
				open={dialogOpen}
				onClose={() => setDialogOpen(!dialogOpen)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Invalid Credentials'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						The details provided are incorrect, it is either because there is no such Account or the email/password is
						incorrect.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setDialogOpen(!dialogOpen)} color="primary">
						Retry
					</Button>
				</DialogActions>
			</Dialog>
			{/* Dialog Box for forget password */}
			<Dialog
				open={forgetPasswordOpen}
				onClose={() => setForgetPasswordOpen(!forgetPasswordOpen)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Forgot Password?'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<DialogContentText id="alert-dialog-description">
							Please provide an E-mail in order to reset your password
						</DialogContentText>
						<ValidatorForm onSubmit={forgetPassword} ref={formRef}>
							<TextValidator
								style={{ width: '40vw' }}
								type="email"
								label="Email"
								name="from_name"
								onChange={(e) => setForgetEmail(e.target.value)}
								value={forgetEmail}
								errorMessages="Please add an email"
								validators={['required', 'isEmail']}
							/>
							<Button
								style={{
									float: 'right',
									margin: '15px',
								}}
								type="submit"
								onClick={forgetPassword}
							>
								CONFIRM
							</Button>
						</ValidatorForm>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default LoginPage;
