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
	RadioGroup,
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useSelector } from 'react-redux';
import { selectCart } from '../../features/cartSlice';
import { selectDelivery, selectSubTotal, selectTax } from '../../features/costSlice';
import { selectUser } from '../../features/userSlice';
import { db } from '../../firebase';
import SEO from '../../shared/components/SEO/SEO';
import './CheckOutPage.css';

function CheckOutPage() {
	const formRef = useRef('form');
	const user = useSelector(selectUser);
	const cartBasket = useSelector(selectCart);
	const subTotal = useSelector(selectSubTotal);
	const delivery = useSelector(selectDelivery);
	const tax = useSelector(selectTax);
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
	const [orderMessage, setOrderMessage] = useState('');

	// Adding the order details into the database
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

			// SENDING AN EMAIL OF THE ORDER TO AMIRAH EMAIL
			// SENDING MAIL FUNCTIONALITY
			var cartDetails = '[';
			for (const item of cartBasket) {
				cartDetails += '(';
				cartDetails += 'Item Name: ' + item.productName;
				cartDetails += ', ';
				cartDetails += 'Cost of Item: $' + item.productCost;
				cartDetails += ', ';
				if (item.preferredMetal !== null) {
					cartDetails += 'Preferred Metal: ' + item.preferredMetal;
					cartDetails += ', ';
				}
				if (item.preferredSize !== null) {
					cartDetails += 'Preferred Size: ' + item.preferredSize;
					cartDetails += ', ';
				}
				cartDetails += 'Product Quantity: ' + item.productQuantity;
				cartDetails += '), ';
			}
			cartDetails += ']';

			setOrderMessage(`
				An Order is made by ${user?.email},
				The Order includes the following details:
				- Cart Items: ${cartDetails}
				- First Name: ${firstName}
				- Last Name: ${lastName}
				- Middle Name: ${middleName}
				- Address Line One: ${addressLineOne}
				- Address Line Two: ${addressLineTwo}
				- City: ${city}
				- Telephone: ${telephoneNumber}
				- Payment Type: ${paymentType}
				- Order Total Cost: $ ${subTotal + tax + delivery}
				`);

			emailjs.sendForm('service_lvksm7m', 'amirah_contactUs', e.target, 'user_pxB9WpI7yEgKMxO3A4XCP').then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
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
			<SEO title="Checkout" />
			<div className="checkoutPage__form">
				<h2>CHECK OUT</h2>
				<ValidatorForm
					onSubmit={proceedCheckout}
					ref={formRef}
					style={{ width: '100%', fontFamily: 'Santral' }}
				>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="First Name"
						name="first name"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
						errorMessages="Please add a First name"
						validators={["required", "matchRegexp:[a-z A-Z]$"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="Middle Name"
						name="middle name"
						onChange={(e) => setMiddleName(e.target.value)}
						value={middleName}
						errorMessages="Please add a Middle name"
						validators={["required", "matchRegexp:[a-z A-Z]$"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="Last Name"
						name="last name"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						errorMessages="Please add a Last name"
						validators={["required", "matchRegexp:[a-z A-Z]$"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="Address Line 01"
						name="address line 01"
						onChange={(e) => setAddressLineOne(e.target.value)}
						value={addressLineOne}
						errorMessages="Please add an Address"
						validators={["required"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="Address Line 02 (Optional)"
						name="address line 02"
						onChange={(e) => setAddressLineTwo(e.target.value)}
						value={addressLineTwo}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="City"
						name="city"
						onChange={(e) => setCity(e.target.value)}
						value={city}
						errorMessages="Please add a City"
						validators={["required", "matchRegexp:[a-z A-Z]$"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="PIN Code"
						name="pin code"
						onChange={(e) => setPinCode(e.target.value)}
						value={pinCode}
						errorMessages="Please add a PIN Code"
						validators={["required"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="Telephone"
						name="telephone"
						onChange={(e) => setTelephoneNumber(e.target.value)}
						value={telephoneNumber}
						errorMessages="Please add a Telephone Number"
						validators={["required", "matchRegexp:[0-9]$"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="Email Address"
						name="from_name"
						onChange={(e) => setEmailAddress(e.target.value)}
						value={emailAddress}
						errorMessages="Please add an Email Address"
						validators={["required", "isEmail"]}
					/>

					<div className="checkout__payment">
						<FormControl component="fieldset" style={{ width: '93%', fontFamily: 'Santral' }}>
							<FormLabel
								component="legend"
								errorMessages="Please add an Email Address"
								validators={["required"]}
							>
								Payment Type
							</FormLabel>

							<RadioGroup
								style={{ display: 'flex', fontFamily: 'Santral' }}
								aria-label="payment"
								name="payment"
								value={paymentType}
								onChange={(e) => setPaymentType(e.target.value)}
							>
								<FormControlLabel
									value="visa"
									style={{ color: 'grey', fontFamily: 'Santral' }}
									control={<Radio />}
									label="VISA"
								/>
								<FormControlLabel
									value="masterCard"
									style={{ color: 'grey', fontFamily: 'Santral' }}
									control={<Radio />}
									label="MASTER CARD"
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							style={{ width: '93%', fontFamily: 'Santral' }}
							disableToolbar
							variant="inline"
							views={['year', 'month']}
							margin="normal"
							id="card-expire-date"
							placeholder="Card Expiry Date"
							value={cardExpireDate}
							onChange={onDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</MuiPickersUtilsProvider>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="Card Number"
						name="card-number"
						onChange={(e) => setCardNumber(e.target.value)}
						value={cardNumber}
						errorMessages="Please add a Card Number"
						validators={["required"]}
					/>
					<TextValidator
						style={{ width: '93%', fontFamily: 'Santral' }}
						type="text"
						label="CSC"
						name="csc"
						onChange={(e) => setCsc(e.target.value)}
						value={csc}
						errorMessages="Please add a CSC"
						validators={["required"]}
					/>
					<TextValidator
						style={{ width: '40vw', display: 'none', fontFamily: 'Santral' }}
						type="text"
						name="message"
						value={orderMessage}
					/>
					<div className="registerPage__createButton">
						{user && cartBasket.length > 0 ? (
							<Button
								style={{backgroundColor: '#d35f46', color: 'white', fontFamily: 'Ginebra_font'}}
								type="submit"
								>
									CONTINUE CHECKOUT
							</Button>
						) : (
							<Button style={{fontFamily: 'Ginebra_font'}} disabled type="submit">
								CONTINUE CHECKOUT
							</Button>
						)}
					</div>
				</ValidatorForm>
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
				<DialogTitle id="alert-dialog-title">Success</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Check out Successfully Completed!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setSucessDialgoOpen(!sucessDialgoOpen)} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CheckOutPage;
