import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import './RegisterPage.css';
import firebase from 'firebase/app';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SEO from '../../../shared/components/SEO/SEO';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/userSlice';

function RegisterPage() {
	const history = useHistory();
	const formRef = useRef('form');
	const [completeBirthday, setcompleteBirthday] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [gender, setGender] = useState('');
	const [birthMonth, setBirthMonth] = useState('');
	const [birthDay, setBirthDay] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		ValidatorForm.addValidationRule('isPasswordLength', (password) => {
			if (password.length <= 6) {
				return false;
			}

			return true;
		});
	});

	const onDateChange = (date, value) => {
		setcompleteBirthday(value);
		setBirthMonth(value.toString().split('/')[1]);
		setBirthDay(value.toString().split('/')[0]);
	}

	const registerUser = (e) => {
		e.preventDefault();
		if (!firstName || !email || !password || !lastName) {
			return;
		}

		// register logic
		auth.createUserWithEmailAndPassword(email, password)
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
					checkOutOrders: [],
					currencyRate: 1,
					currencySymbol: '$',
				});

				// clean the fields
				setFirstName('');
				setLastName('');
				setGender('');
				setEmail('');
				setBirthDay('');
				setBirthMonth('');
				setPassword('');
				dispatch(login(auth.user));

				// redirect to homepage
				setTimeout(() => {
					history.replace('/');
				}, 2000);
			}).catch((e) => alert(e.message));
	}

	return (
		<div className="registerPage">
			<SEO title="Amirah - Register" />
			{/* form */}
			<div className="registerPage__body">
				<h1>CREATE AN ACCOUNT</h1>

				<p>
					Save time during checkout, view your shopping bag and saved items from any device and access your
					order history.
				</p>

				<ValidatorForm
					onSubmit={registerUser}
					ref={formRef}
					style={{ width: '100%' }}
					className="registerPage__form"
				>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="First Name"
						name="first name"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
						errorMessages="Please add a first name"
						validators={["required"]}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Last Name"
						name="last name"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						errorMessages="Please add a last name"
						validators={["required"]}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="email"
						label="Email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						errorMessages="Please add an email"
						validators={["required", "isEmail"]}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="password"
						label="Password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						errorMessages={["Please add a password", "Please enter more than 6 characters"]}
						validators={["required", "isPasswordLength"]}
					/>
					<div className="registerPage__formSecond">
						<div className="registerPage__formSecondInputs">
							<FormControl component="fieldset">
								<FormLabel style={{ fontFamily: 'santral' }} component="legend">
									Gender (Optional)
								</FormLabel>
								<RadioGroup
									style={{ display: 'flex' }}
									aria-label="gender"
									name="gender1"
									value={gender}
									onChange={(e) => setGender(e.target.value)}
								>
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
									placeholder="Birthday"
									value={completeBirthday}
									onChange={onDateChange}
									KeyboardButtonProps={{
										"aria-label": "change date",
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
		</div>
	);
}

export default RegisterPage;
