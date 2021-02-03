import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import './RegisterPage.css';
import firebase from 'firebase';
import { useStateValue } from '../../../StateProvider';

function RegisterPage() {
	const history = useHistory();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [gender, setGender] = useState('');
	const [birthMonth, setBirthMonth] = useState('');
	const [birthDay, setBirthDay] = useState('');
	const [{ user }, dispatch] = useStateValue();

	const registerUser = (e) => {
		e.preventDefault();

		if (!firstName || !email || !password || !lastName) {
			return alert('Please enter the required details');
		}
		// register logic
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// created a user and logged in
				auth.user.updateProfile({
					displayName: firstName + ' ' + lastName,
				});

				// Creating a user collection and adding details about the user using cloud firebase
				db.collection('users')
					.doc(email)
					.set({
						userID: email,
						gender: gender,
						birthMonth: birthMonth,
						birthDay: birthDay,
						cart: [
							{
								productName: '',
								productCost: 0,
								productQuantity: 0,
								productImgURL: '',
							},
						],
						wishlist: [
							{
								productName: '',
								productCost: 0,
								productQuantity: 0,
								productImgURL: '',
							},
						],
						timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					});

				// clean the fields
				setFirstName('');
				setLastName('');
				setGender('');
				setEmail('');
				setBirthDay('');
				setBirthMonth('');
				setPassword('');

				// setting the user into the react context API
				dispatch({
					type: 'SET_USER',
					user: auth.user,
				});

				setTimeout(() => {
					alert('Welcome ' + auth.user.displayName + '!');
				}, 1000);

				// redirect to homepage
				history.replace('/');
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="registerPage">
			{/* jewel image */}
			<div className="registerPage__firstJewel">
				<img src="aboutuspage/purple-sapphire.png" alt="" />
			</div>
			{/* form */}
			<div className="registerPage__body">
				<h1>CREATE AN ACCOUNT</h1>

				<p>
					Save time during checkout, view your shopping bag and saved items from any device and access your order
					history.
				</p>

				<form className="registerPage__form">
					<div className="registerPage__formFirst">
						<input
							type="text"
							placeholder="First Name"
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
						<input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
						<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
						<input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className="registerPage__formSecond">
						<p>Gender (Optional)</p>
						<div className="registerPage__formSecondInputs">
							<input type="radio" name="gender" value="female" id="female" onClick={(e) => setGender('Female')} />
							<label for="female">Female</label>{' '}
							<input type="radio" name="gender" value="male" id="male" onClick={(e) => setGender('Male')} />
							<label for="male">Male</label>
						</div>
					</div>
					<div className="registerPage__formThird">
						<p>Birthday (Optional)</p>
						<div className="registerPage__formThirdInputs">
							<input
								type="number"
								name="month"
								placeholder="Month"
								onChange={(e) => setBirthMonth(e.target.value)}
								value={birthMonth}
							/>
							<input
								type="number"
								name="day"
								placeholder="Day"
								onChange={(e) => setBirthDay(e.target.value)}
								value={birthDay}
							/>
						</div>
					</div>
					<div className="registerPage__createButton">
						<button onClick={registerUser}>CREATE AN ACCOUNT</button>
					</div>
				</form>
			</div>

			{/* jewel image */}
			<div className="registerPage__lastJewel">
				<img src="aboutuspage/purple-sapphire.png" alt="" />
			</div>
		</div>
	);
}

export default RegisterPage;
