import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './Authorize.css';
import { allow } from '../../features/authorizedSlice';

function Authorize({ _ }) {
	const formRef = useRef('form');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const signIn = (event) => {
		event.preventDefault();

		if (password === 'AmirahAdmin123') {
			dispatch(allow());
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
