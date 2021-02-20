// import { useHistory } from 'react-router-dom';
// import { auth } from '../../../firebase';
// import { useStateValue } from '../../../StateProvider';
import { useEffect, useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import './Footer.css';
import cc from 'currency-codes';
import coinify from 'coinify';
import { db } from '../../../firebase';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link, useHistory } from 'react-router-dom';

function Footer() {
	const [date] = useState(new Date().getFullYear());
	const history = useHistory();
	const [{ currencySymbol, currencyRate, user }, dispatch] = useStateValue();
	const BASE_URL = 'https://v6.exchangerate-api.com/v6/0a31808a3c199a87cfda7925/latest/USD';
	const [exchangeRates, setExchangeRates] = useState({});

	const [countries, setCountries] = useState([]);
	const [notSortedCountries, setNotSortedCountries] = useState([]);
	const [currency, setCurrency] = useState([]);
	const [displayCountryList, setDisplayCountryList] = useState(false);
	const [loadedAllTheCountries, setLoadedAllTheCountries] = useState(false);

	// This use effect will fetch all the updated/latest currency rates from the API with base (USD)
	useEffect(() => {
		// This is fetching the exchange rate API details
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				// we have fetched all the rates from the API
				setExchangeRates(data['conversion_rates']);
				setLoadedAllTheCountries(true);
			});
	}, []);

	useEffect(() => {
		if (loadedAllTheCountries) {
			// Looping though each of the Currency Code and Populating the Country and the
			// Code list
			let allCountry = [];
			let allCurrency = [];

			for (let index = 0; index < Object.keys(exchangeRates).length; index++) {
				const currencyItem = Object.keys(exchangeRates)[index];
				const countriesArr = cc.code(currencyItem)?.countries;
				for (let indexNew = 0; indexNew < countriesArr?.length; indexNew++) {
					countriesArr[indexNew] = countriesArr[indexNew]?.replace('(The)', '');
					allCountry.push(countriesArr[indexNew]);
					allCurrency.push(currencyItem);
				}
			}

			// setting the currency and country array
			// allCountry.sort();
			let copyCountry = [];

			for (let index = 0; index < allCountry.length; index++) {
				copyCountry.push(allCountry[index]);
			}

			setNotSortedCountries(allCountry);
			setCountries(copyCountry.sort());
			setCurrency(allCurrency);

			setDisplayCountryList(true);
		}
	}, [loadedAllTheCountries]);

	// handling the clicked country
	const handleClickedCountry = (e) => {
		let countryIndex = notSortedCountries.indexOf(e.target.value);
		let clickedCC = currency[countryIndex];
		let currencySymbol = coinify.symbol(clickedCC);

		// Dispatch to set the new currency rate
		dispatch({
			type: 'SET_CURRENCY_RATE',
			currencyRate: exchangeRates[clickedCC],
		});

		// Dispatch to set the new currency symbol
		dispatch({
			type: 'SET_CURRENCY_SYMBOL',
			currencySymbol: currencySymbol,
		});

		// Update the currency and the currency symbol from the DB
		db.collection('users').doc(user?.email).update({
			currencyRate: exchangeRates[clickedCC],
			currencySymbol: currencySymbol,
		});
	};

	return (
		<div className="footer">
			<div className="footer__top">
				<div className="footer__topLeft">
					<div className="footer__topLeftSectionOne">
						<p>
							<Link>Customer Service</Link>
						</p>
						<p>
							<Link>Contact Us</Link>
						</p>
						<p>
							<Link>Product Care & Repair</Link>
						</p>
						<p>
							<Link>Book an Appointment</Link>
						</p>
						<p>
							<Link>Frequently Asked Questions</Link>
						</p>
						<p>
							<Link>Shipping & Returns</Link>
						</p>
						<p>
							<Link>Tiffany Select Financing</Link>
						</p>
						<p>
							<Link>Gift Cards</Link>
						</p>
					</div>
					<div className="footer__topLeftSectionTwo">
						<p>
							<Link>Our Company</Link>
						</p>
						<p>
							<Link>World of Amirah</Link>
						</p>
						<p>
							<Link>Sustainability</Link>
						</p>
						<p>
							<Link>CA Supply Chains Act</Link>
						</p>
						<p>
							<Link>Amirah Careers</Link>
						</p>
						<p>
							<Link>Website Policies</Link>
						</p>
						<p>
							<Link>Report an Issue</Link>
						</p>
					</div>
					<div className="footer__topLeftSectionThree">
						<p>
							<Link>Related Amirah Sites</Link>
						</p>
						<p>
							<Link>Wedding & Gift Registry</Link>
						</p>
						<p>
							<Link>Business Accounts</Link>
						</p>
						<p>
							<Link>Amirah some shit</Link>
						</p>
					</div>
				</div>
				<div className="footer__topRight">
					<div className="footer__topRightSignUp">
						<p>Latest by Amirah Gems</p>
						<p className="footer__rightSectionDescription">
							Be the first to know about exciting new designs, special events, store openings and much more.
						</p>

						<a href="/register">SIGN UP</a>
					</div>
					<div className="footer__topRightIcons">
						<IconButton
							className="footer__topRightIconButton"
							onClick={() => window.open('http://www.instagram.com', '_blank')}
						>
							<InstagramIcon />
						</IconButton>
						<IconButton
							className="footer__topRightIconButton"
							onClick={() => window.open('http://www.facebook.com', '_blank')}
						>
							<FacebookIcon />
						</IconButton>
						<IconButton className="footer__topRightIconButton" onClick={() => history.replace('/contactUs')}>
							<EmailIcon />
						</IconButton>
						<IconButton
							className="footer__topRightIconButton"
							onClick={() => window.open('http://www.twitter.com', '_blank')}
						>
							<TwitterIcon />
						</IconButton>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottomCountryRight">
					{displayCountryList && (
						<div className="footer__bottomCountrySelectCountry">
							<p>Change Location: </p>
							<select onChange={(e) => handleClickedCountry(e)}>
								<option value={cc.code('USD')?.countries[0]}>United States</option>
								{countries?.map((country, index) => (
									<option key={index} value={country}>
										{country}
									</option>
								))}
							</select>
						</div>
					)}
				</div>
				<p className="footer__bottomText">{`© AmirahGems. ${date}`}</p>
				<div className="footer__bottomCountryLeft">
					{displayCountryList && (
						<div className="footer__bottomCountrySelectCountry footer__bottomCountrySelectCountryRight">
							<p>Select Country: </p>
							<select disabled={true} onChange={(e) => handleClickedCountry(e)}>
								<option value={cc.code('USD')?.countries[0]}>Select Country</option>
								{countries?.map((country, index) => (
									<option key={index} value={country}>
										{country}
									</option>
								))}
							</select>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Footer;
