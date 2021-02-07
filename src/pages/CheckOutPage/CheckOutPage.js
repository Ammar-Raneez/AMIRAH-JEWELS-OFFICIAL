import DateFnsUtils from '@date-io/date-fns';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useEffect, useRef, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './CheckOutPage.css';

function CheckOutPage() {
	const [{ subTotal, delivery, tax, cartBasket, user }, dispatch] = useStateValue();
	const formRef = useRef('form');
	const history = useHistory();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [sucessDialgoOpen, setSucessDialgoOpen] = useState(false);

	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');
	const [addressLineOne, setAddressLineOne] = useState('');
	const [addressLineTwo, setAddressLineTwo] = useState('');
	const [city, setCity] = useState('');
	const [pinCode, setPinCode] = useState('');
	const [telephoneNumber, setTelephoneNumber] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [paymentType, setPaymentType] = useState('visa');
	const [cardExpireDate, setCardExpireDate] = useState('');
	const [cardExpMonth, setCardExpMonth] = useState('');
	const [cardExpYear, setCardExpYear] = useState('');
	const [csc, setCsc] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [allCheckOutDetailsHistory, setAllCheckOutDetailsHistory] = useState([]);
	const [updateCheckoutCollection, setUpdateCheckoutCollection] = useState(false);

	useEffect(() => {
		if (updateCheckoutCollection) {
			console.log('adding to database');
			db.collection('users')
				.doc(user?.email)
				.update({
					checkOutOrders: [
						...allCheckOutDetailsHistory,
						{
							cartBasket: cartBasket,
							firstName: firstName,
							lastName: lastName,
							middleName: middleName,
							addressLineOne: addressLineOne,
							addressLineTwo: addressLineTwo,
							city: city,
							pinCode: pinCode,
							telephoneNumber: telephoneNumber,
							emailAddress: emailAddress,
							paymentType: paymentType,
							cardExpMonth: cardExpMonth,
							cardExpYear: cardExpYear,
							csc: csc,
							cardNumber: cardNumber,
							orderPrice: subTotal + tax + delivery,
						},
					],
				});
		}
		setUpdateCheckoutCollection(true);
	}, [allCheckOutDetailsHistory]);

	// WHEN USER CLICKS CHECKOUT BTN, THIS FUNCTION IS FIRED!
	const proceedCheckout = (e) => {
		let paymentSuccessful = true;
		let tempArray = [];
		e.preventDefault();

		// CONNECTING THE BANK AND SEND THE AMOUNT TO BE CREDITED
		// BANK STUFF (NOTE:- Important to get the response of the transaction occurred!)

		// STORING THE CHECKOUT RELATED DETAILS WITH THE PRICE INTO THE FIREBASE FIRE-STORE (ONLY IF PAYMENTS ARE MADE SUCCESSFULLY)
		if (paymentSuccessful) {
			// Getting snapshot of the current checkout order list
			db.collection('users').onSnapshot((snapshot) =>
				snapshot.docs.forEach((doc) => {
					if (doc.id === user?.email) {
						// getting the current checkout orders present from the database
						console.log('Adding old items inside');
						tempArray = [];
						for (const checkOutDetails of doc.data()?.checkOutOrders) {
							tempArray.push(checkOutDetails);
						}
					}
				})
			);

			setTimeout(() => {
				setAllCheckOutDetailsHistory(tempArray);
			}, 5000);
		}

		// ALERT THE USER THAT PAYMENT DONE SUCCESSFULLY OR RE-DIRECT USING A MODEL
		if (paymentSuccessful) {
			setSucessDialgoOpen(!sucessDialgoOpen);
		} else {
			setDialogOpen(!dialogOpen);
		}
	};

	const onDateChange = (date, value) => {
		setCardExpireDate(value);
		setCardExpYear(value.toString().split(' ')[1]);
		setCardExpMonth(value.toString().split(' ')[0]);
	};
	return (
		<div className="checkoutPage">
			{/* jewel image */}
			<div className="thankingPage__firstJewel">
				<img src="aboutuspage/purple-sapphire.png" alt="" />
			</div>
			<div className="checkoutPage__form">
				<h2>Check Out</h2>
				<ValidatorForm onSubmit={proceedCheckout} ref={formRef} style={{ width: '100%' }}>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="First Name"
						name="first name"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
						errorMessages="Please add a First name"
						validators={['required', 'matchRegexp:[a-z A-Z]$']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Middle Name"
						name="middle name"
						onChange={(e) => setMiddleName(e.target.value)}
						value={middleName}
						errorMessages="Please add a Middle name"
						validators={['required', 'matchRegexp:[a-z A-Z]$']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Last Name"
						name="last name"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						errorMessages="Please add a Last name"
						validators={['required', 'matchRegexp:[a-z A-Z]$']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Address Line 01"
						name="address line 01"
						onChange={(e) => setAddressLineOne(e.target.value)}
						value={addressLineOne}
						errorMessages="Please add an Address"
						validators={['required']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Address Line 02 (Optional)"
						name="address line 02"
						onChange={(e) => setAddressLineTwo(e.target.value)}
						value={addressLineTwo}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="City"
						name="city"
						onChange={(e) => setCity(e.target.value)}
						value={city}
						errorMessages="Please add a City"
						validators={['required', 'matchRegexp:[a-z A-Z]$']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="PIN Code"
						name="pin code"
						onChange={(e) => setPinCode(e.target.value)}
						value={pinCode}
						errorMessages="Please add a PIN Code"
						validators={['required']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Telephone"
						name="telephone"
						onChange={(e) => setTelephoneNumber(e.target.value)}
						value={telephoneNumber}
						errorMessages="Please add a Telephone Number"
						validators={['required', 'matchRegexp:[0-9]$']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Email Address"
						name="email address"
						onChange={(e) => setEmailAddress(e.target.value)}
						value={emailAddress}
						errorMessages="Please add an Email Address"
						validators={['required', 'isEmail']}
					/>
					<div className="checkout__payment">
						<FormControl component="fieldset" style={{ width: '93%' }}>
							<FormLabel component="legend" errorMessages="Please add an Email Address" validators={['required']}>
								Payment Type
							</FormLabel>

							<RadioGroup
								style={{ display: 'flex' }}
								aria-label="payment"
								name="payment"
								value={paymentType}
								onChange={(e) => setPaymentType(e.target.value)}
							>
								<FormControlLabel value="visa" style={{ color: 'grey' }} control={<Radio />} label="VISA" />
								<FormControlLabel
									value="masterCard"
									style={{ color: 'grey' }}
									control={<Radio />}
									label="MASTER CARD"
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							style={{ width: '93%' }}
							disableToolbar
							variant="inline"
							views={["year", "month"]}
							margin="normal"
							id="card-expire-date"
							placeholder="Card Expiry Date"
							value={cardExpireDate}
							onChange={onDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</MuiPickersUtilsProvider>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Card Number"
						name="card-number"
						onChange={(e) => setCardNumber(e.target.value)}
						value={cardNumber}
						errorMessages="Please add a Card Number"
						validators={['required']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="CSC"
						name="csc"
						onChange={(e) => setCsc(e.target.value)}
						value={csc}
						errorMessages="Please add a CSC"
						validators={['required']}
					/>
					<div className="registerPage__createButton">
						<button type="submit">CONTINUE CHECKOUT</button>
					</div>
				</ValidatorForm>
			</div>
			{/* jewel image */}
			<div className="thankingPage__lastJewel">
				<img src="aboutuspage/purple-sapphire.png" alt="" />
			</div>

			<Dialog
				open={dialogOpen}
				onClose={() => setDialogOpen(!dialogOpen)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Error'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">Something went wrong!</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setDialogOpen(!dialogOpen)} color="primary">
						Retry
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={sucessDialgoOpen}
				onClose={() => setSucessDialgoOpen(!sucessDialgoOpen)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Success'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">Check out Successfully Completed!</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setSucessDialgoOpen(!sucessDialgoOpen)} color="primary">
						ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CheckOutPage;
