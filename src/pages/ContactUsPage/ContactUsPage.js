import { Fade } from 'react-awesome-reveal';
import './ContactUsPage.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import ScheduleIcon from '@material-ui/icons/Schedule';

function ContactUsPage() {
	return (
		<div className="contactUsPage">
			<Fade cascade direction="right" triggerOnce>
				<h1  className="contactUsPageTitle">Contact Us</h1>

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
						<button>SEND MAIL</button>
					</div>
					<div className="contactUsPage__optionsItem">
						<ScheduleIcon />
						<button>SCHEDULE A CALL</button>
					</div>
					<div className="contactUsPage__optionsItem">
						<CallIcon />
						<button>CALL US NOW</button>
					</div>
				</div>

				{/* Operation hours details */}
				<div className="contactUsPage__openHours">
					<h4>Hours of Operation:</h4>
					<p>Monday–Friday: 8:00AM–12:00 AM EST Saturday–Sunday: 8:00AM–9:00PM EST</p>
				</div>
			</Fade>
		</div>
	);
}

export default ContactUsPage;
