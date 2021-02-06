import DateFnsUtils from '@date-io/date-fns';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useRef, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './CheckOutPage.css';

function CheckOutPage() {
	const formRef = useRef('form');
	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');
	const [addressLineOne, setAddressLineOne] = useState('');
	const [addressLineTwo, setAddressLineTwo] = useState('');
	const [city, setCity] = useState('');
	const [pinCode, setPinCode] = useState('');
	const [telephoneNumber, setTelephoneNumber] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [paymentType, setPaymentType] = useState('');
	const [cardExpireDate, setCardExpireDate] = useState('');
	const [csc, setCsc] = useState('');
	const [cardNumber, setCardNumber] = useState('');

	const proceedCheckout = () => {};

	return (
		<div className="checkoutPage">
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
						validators={['required']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Middle Name"
						name="middle name"
						onChange={(e) => setMiddleName(e.target.value)}
						value={middleName}
						errorMessages="Please add a Middle name"
						validators={['required']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Last Name"
						name="last name"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						errorMessages="Please add a Last name"
						validators={['required']}
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
						label="Address Line 02"
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
						validators={['required']}
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
						validators={['required']}
					/>
					<TextValidator
						style={{ width: '93%' }}
						type="text"
						label="Email Address"
						name="email address"
						onChange={(e) => setEmailAddress(e.target.value)}
						value={emailAddress}
						errorMessages="Please add an Email Address"
						validators={['required']}
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
							format="MM/dd/yyyy"
							margin="normal"
							id="card-expire-date"
							placeholder="Card Expiry Date (mm/dd/yyyy)"
							value={cardExpireDate}
							onChange={(e) => setCardExpireDate(e)}
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
		</div>
	);
}

export default CheckOutPage;
