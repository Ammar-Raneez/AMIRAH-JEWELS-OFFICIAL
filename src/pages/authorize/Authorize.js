import { useRef, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './authorize.css';

function Authorize({ _, setIsAuthorized }) {
	const formRef = useRef('form');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (event) => {
		event.preventDefault();

		if (email === 'amirahadmin@gmail.com' && password === 'AmirahAdmin123') {
			setIsAuthorized(true);
		} else {
			alert('Invalid Credentials');
		}
	}

	return (
		<div 
			className="authorize" 
			style={{ 
				background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(logos/logo.png)' ,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '165% 10%'
			}}
		>
			<div className="authorize__login-wrapper">
				<div className="authorize__login">
					<div className="authorize__loginTop">
						<p className="authorize__title">SIGN IN</p>
						<p className="authorize__subTitle">Please sign in to your Amirah account</p>
					</div>
					<div className="authorize__loginBottom">
						<ValidatorForm onSubmit={signIn} ref={formRef} className="authorize__form">
							<TextValidator
								style={{ width: '100%' }}
								label="Email"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								errorMessages="Please add an email"
								validators={["required", "isEmail"]}
							/>
							<TextValidator
								style={{ width: '100%' }}
								type="password"
								label="Password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								errorMessages="Please add a password"
								validators={["required"]}
							/>
							<button className="authorize__btn" type="submit">Sign In</button>
						</ValidatorForm>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Authorize;
