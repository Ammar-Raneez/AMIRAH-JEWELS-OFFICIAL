// import { useHistory } from 'react-router-dom';
// import { auth } from '../../../firebase';
// import { useStateValue } from '../../../StateProvider';
import { useEffect, useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import './Footer.css';
import cc from 'currency-codes';
import coinify from 'coinify';

function Footer() {
	const [date] = useState(new Date().getFullYear());
	const [{ currencySymbol, currencyRate }, dispatch] = useStateValue();
	const BASE_URL = 'https://v6.exchangerate-api.com/v6/0a31808a3c199a87cfda7925/latest/USD';
	const [exchangeRates, setExchangeRates] = useState({});

	const [countries, setCountries] = useState([]);
	const [notSortedCountries, setNotSortedCountries] = useState([]);
	const [currency, setCurrency] = useState([]);
	const [displayCountryList, setDisplayCountryList] = useState(false);
	const [loadedAllTheCountries, setLoadedAllTheCountries] = useState(false);

	// This use effect will fetch all the updated/latest currency rates from the API with base (USD)
	useEffect(() => {
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
	};

	return (
		<div className="footer">
			<div className="footer__main">
				<div className="footer__top">
					<div className="footer__leftSection">
						<div className="footer__leftSectionTop">
							<p>Products</p>
							<a href="/necklace+pendants">Necklaces & Pendants</a>
							<a href="/earrings">Earrings</a>
							<a href="/rings">Rings</a>
							<a href="/bracelets">Bracelets</a>
							<a href="/engagement+rings">Engagement Rings</a>
						</div>
						<div className="footer__leftSectionDown">
							<p>Follow us on:</p>
							<a rel="noreferrer" href="https://www.instagram.com/amirahgems/" target="_blank">
								Instagram
							</a>
							<a rel="noreferrer" href="https://www.facebook.com/amirahgems" target="_blank">
								Facebook
							</a>
						</div>
					</div>
					<div className="footer__middleSection">
						<p>About Us</p>
						<a href="/aboutus">Company</a>
						<a href="/charity">Charity</a>
						<a href="/careers">Careers</a>
						<a href="/policy">Policy</a>
						<a href="/contactUs">Contact Us</a>
					</div>
					<div className="footer__rightSection">
						<p>Latest by Amirah Gems</p>
						<p className="footer__rightSectionDescription">
							Be the first to know about exciting new designs, special events, store openings and much more.
						</p>

						<a href="/register">SIGN UP</a>
						{displayCountryList && (
							<div className="footer__rightSectionSelectCountry">
								<p>Select Country: </p>
								<select onChange={(e) => handleClickedCountry(e)}>
									<option value={cc.code('USD')?.countries[0]}>Select Country</option>
									{countries?.map((country) => (
										<option key={country} value={country}>
											{country}
										</option>
									))}
								</select>
							</div>
						)}
					</div>
				</div>
				<div className="footer__bottom">{`© AmirahGems. ${date}`}</div>
			</div>
		</div>
	);
}

export default Footer;
