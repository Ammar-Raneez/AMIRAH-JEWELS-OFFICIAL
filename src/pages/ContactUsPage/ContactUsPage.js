import { Fade } from 'react-awesome-reveal';
import './ContactUsPage.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import ScheduleIcon from '@material-ui/icons/Schedule';
import emailjs from 'emailjs-com';
import {
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@material-ui/core';
import { useRef, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SEO from '../../shared/components/SEO/SEO';

function ContactUsPage() {
	const formRef = useRef('form');
	const [emailDialogOpen, setEmailDialogOpen] = useState(false);
	const [email, setEmail] = useState();
	const [message, setMessage] = useState('');
	const [scheduleACallDialogOpen, setScheduleACallDialogOpen] = useState(false);
	const [scheduleDate, setScheduleDate] = useState();

	const sendEmail = (e) => {
		e.preventDefault();
		setEmailDialogOpen(!emailDialogOpen);

		// SENDING MAIL FUNCTIONALITY
		emailjs.sendForm('service_lvksm7m', 'amirah_contactUs', e.target, 'user_pxB9WpI7yEgKMxO3A4XCP').then(
			(result) => {
				console.log(result.text);
				setEmail('');
				setMessage('');
			}, (error) => {
				console.log(error.text);
			}
		);
	}

	const scheduleACall = (e) => {
		e.preventDefault();
		setScheduleACallDialogOpen(!scheduleACallDialogOpen);

		// SENDING MAIL FUNCTIONALITY
		emailjs.sendForm('service_lvksm7m', 'amirah_scheduleCall', e.target, 'user_pxB9WpI7yEgKMxO3A4XCP').then(
			(result) => {
				console.log(result.text);
				setEmail('');
				setMessage('');
				setScheduleDate('');
			}, (error) => {
				console.log(error.text);
			}
		);
	}

	// setting the selected date from the calendar
	const onDateChange = (date, value) => {
		setScheduleDate(value);
	}

	return (
		<div className="contactUsPage">
			<SEO title="Contact Us" />
			<Fade cascade direction="right" triggerOnce>
				<h1 className="contactUsPageTitle">CONTACT US</h1>

				{/* description */}
				<p className="contactUsPageDescription">
					There's no question too small or request too big for our customer service experts. From choosing an engagement
					ring ot gift to providing effortless one-on-one appointments or product care and repair, we're always at your
					service.
				</p>

				{/* Contact Us options */}
				<div className="contactUsPage__options">
					<div className="contactUsPage__optionsItem">
						<MailOutlineIcon />
						<button onClick={() => setEmailDialogOpen(!emailDialogOpen)}>SEND MAIL</button>
					</div>
					<div className="contactUsPage__optionsItem">
						<ScheduleIcon />
						<button onClick={() => setScheduleACallDialogOpen(!scheduleACallDialogOpen)}>SCHEDULE A CALL</button>
					</div>
					<div className="contactUsPage__optionsItem">
						<CallIcon />
						<a href="tel:+94761234567">
							<button>CALL US NOW</button>
						</a>
					</div>
				</div>

				{/* Operation hours details */}
				<div className="contactUsPage__openHours">
					<h4>Hours of Operation:</h4>
					<p>Monday–Friday: 8:00AM–12:00 AM EST Saturday–Sunday: 8:00AM–9:00PM EST</p>
				</div>
			</Fade>

			{/* Dialog Box for sending mail */}
			<Fade cascade direction="up" triggerOnce>
				<Dialog
					open={emailDialogOpen}
					onClose={() => setEmailDialogOpen(!emailDialogOpen)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Create a Mail</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<ValidatorForm onSubmit={sendEmail} ref={formRef}>
								<TextValidator
									style={{ width: '40vw' }}
									type="email"
									label="Email"
									name="from_name"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									errorMessages="Please add an email"
									validators={["required", "isEmail"]}
								/>

							
								<TextValidator
									style={{ width: '40vw' }}
									type="text"
									label="Message"
									name="message"
									onChange={(e) => setMessage(e.target.value)}
									value={message}
									errorMessages="Please add a message"
									validators={["required"]}
								/>
								<Button
									style={{
										float: 'right',
										margin: '15px',
									}}
									type="submit"
								>
									SEND
								</Button>
							</ValidatorForm>
						</DialogContentText>
					</DialogContent>
				</Dialog>
			</Fade>

			{/* Dialog Box for scheduling a call */}
			<Fade cascade direction="up" triggerOnce>
				<Dialog
					open={scheduleACallDialogOpen}
					onClose={() => setScheduleACallDialogOpen(!scheduleACallDialogOpen)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Schedule a call</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<ValidatorForm onSubmit={scheduleACall} ref={formRef}>
								<TextValidator
									style={{ width: '40vw' }}
									type="email"
									label="Email"
									name="from_name"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									errorMessages="Please add an email"
									validators={["required", "isEmail"]}
								/>
		
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										style={{ width: '40vw' }}
										disableToolbar
										variant="inline"
										name="message"
										format="MM/dd/yyyy"
										margin="normal"
										placeholder="Select a date"
										value={scheduleDate}
										onChange={onDateChange}
										KeyboardButtonProps={{
											"aria-label": "change date",
										}}
									/>
								</MuiPickersUtilsProvider>
								<Button
									style={{
										float: 'right',
										margin: '15px',
									}}
									type="submit"
								>
									SEND
								</Button>
							</ValidatorForm>
						</DialogContentText>
					</DialogContent>
				</Dialog>
			</Fade>
		</div>
	);
}

export default ContactUsPage;
