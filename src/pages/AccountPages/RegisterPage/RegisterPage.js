import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import './RegisterPage.css';
import firebase from 'firebase';
import { useStateValue } from '../../../StateProvider';
import { FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function RegisterPage() {
	const history = useHistory();
	const formRef = useRef("form");
	const [completeBirthday, setcompleteBirthday] = useState("Fri Feb 12 2021 20:52:00 GMT+0530");
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [gender, setGender] = useState('');
	const [birthMonth, setBirthMonth] = useState('');
	const [birthDay, setBirthDay] = useState('');
	const [{ user }, dispatch] = useStateValue();
	
	useEffect(() => {
		ValidatorForm.addValidationRule('isPasswordLength', (password) => {
			if (password.length <= 6) {
				return false;
			}
			return true;
	})});

	function manipulateObtainedBirthday() {
		let splittedVals = completeBirthday.split(" ");
		
		let monthMaps = {"Jan" : 1, "Feb" : 2, "Mar" : 3, "Apr" : 4, "May" : 5, "Jun" : 6, "Jul" : 7, "Aug" : 8, "Sep" : 9, "Oct" : 10, "Nov" : 11, "Dec" : 12};
		setBirthMonth(monthMaps[splittedVals[1]]);
		setBirthDay(monthMaps[splittedVals[2]]);
	}

	const registerUser = (e) => {
		e.preventDefault();

		if (!firstName || !email || !password || !lastName) {
			return;
		} else {
			manipulateObtainedBirthday();
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
				db.collection('users').doc(email).set({
					userID: email,
					gender: gender,
					birthMonth: birthMonth,
					birthDay: birthDay,
					cart: [],
					wishlist: [],
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

				// setTimeout(() => {
				// 	alert('Welcome ' + auth.user.displayName + '!');
				// }, 1000);

				// redirect to homepage
				history.replace('/');

				setTimeout(() => {
					window.location.reload(true);
				}, 2000);
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

				<ValidatorForm onSubmit={registerUser} ref={formRef} style={{ width: '100%' }} className="registerPage__form">
					{/* <div className="registerPage__formFirst">
						<ValidatorForm ref={formRef} style={{ width: '100%' }}> */}
							<TextValidator 
								style={{ width: '93%' }} 
								type="text" 
								label="First Name" 
								name="first name"
								onChange={(e) => setFirstName(e.target.value)} 
								value={firstName} 
								errorMessages="Please add a first name"
								validators={['required']}
							/>
							<TextValidator 
								style={{ width: '93%' }} 
								type="text" 
								label="Last Name" 
								name="last name"
								onChange={(e) => setLastName(e.target.value)} 
								value={lastName} 
								errorMessages="Please add a last name"
								validators={['required']}	
							/>
							<TextValidator 
								style={{ width: '93%' }} 
								type="email" 
								label="Email"
								name="email" 
								onChange={(e) => setEmail(e.target.value)} 
								value={email} 
								errorMessages="Please add an email"
								validators={['required', 'isEmail']}
							/>
							<TextValidator 
								style={{ width: '93%' }} 
								type="password" 
								label="Password" 
								name="password"
								onChange={(e) => setPassword(e.target.value)} 
								value={password} 
								errorMessages={["Please add a password", "Please enter more than 6 characters"]}
								validators={['required', 'isPasswordLength']}	
							/>
						{/* </ValidatorForm>
					</div> */}
					<div className="registerPage__formSecond">
						{/* <p>Gender (Optional)</p> */}
						<div className="registerPage__formSecondInputs">
							<FormControl component="fieldset">
								<FormLabel style={{ fontFamily: 'Quattrocento-Regular' }} component="legend">Gender (Optional)</FormLabel>
								<RadioGroup style={{ display: 'flex' }}  aria-label="gender" name="gender1" value={gender} onChange={(e) => setGender(e.target.value)}>
									<FormControlLabel value="female" control={<Radio />} label="Female" />
									<FormControlLabel value="male" control={<Radio />} label="Male" />
								</RadioGroup>
							</FormControl>
						</div>
					</div>
					<div className="registerPage__formThird">
						<p>Birthday (Optional)</p>
						<div className="registerPage__formThirdInputs">
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									disableToolbar
									variant="inline"
									format="MM/dd/yyyy"
									margin="normal"
									id="bday"
									label="Birthday"
									value={completeBirthday}
									onChange={(e) => setcompleteBirthday(e)}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
								/>
							</MuiPickersUtilsProvider>
						</div>
					</div>
					<div className="registerPage__createButton">
						<button type="submit">CREATE AN ACCOUNT</button>
					</div>
				</ValidatorForm>
			</div>

			{/* jewel image */}
			<div className="registerPage__lastJewel">
				<img src="aboutuspage/purple-sapphire.png" alt="" />
			</div>
		</div>
	);
}

export default RegisterPage;
