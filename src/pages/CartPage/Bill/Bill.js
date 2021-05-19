import React from 'react';
import { Link } from 'react-router-dom';
import './Bill.css';
import formatCurrency from 'format-currency';
import { useSelector } from 'react-redux';
import { selectCurrencySymbol } from '../../../features/currencySymbolSlice';
import { selectCurrencyRate } from '../../../features/currencyRateSlice';

function Bill({ subTotal, delivery, tax }) {
	const currencySymbol = useSelector(selectCurrencySymbol);
	const currencyRate = useSelector(selectCurrencyRate);

	return (
		<div className="bill">
			<div className="bill__topSection">
				<p>Order Summary</p>
				<span>
					<p>Subtotal</p>
					<p>
						{currencySymbol} {formatCurrency(Math.round(subTotal * currencyRate * 100) / 100)}
					</p>
				</span>
				<span>
					<p>Delivery</p>
					<p>
						{currencySymbol} {formatCurrency(Math.round(delivery * currencyRate * 100) / 100)}
					</p>
				</span>
				<span>
					<p>Tax</p>
					<p>
						{currencySymbol} {formatCurrency(Math.round(tax * currencyRate * 100) / 100)}
					</p>
				</span>
			</div>
			<div className="bill_middleSection">
				<span>
					<p>Estimated Total</p>
					<p>
						{currencySymbol}{' '}
						{formatCurrency(Math.round((subTotal + delivery + tax) * currencyRate * 100) / 100)}
					</p>
				</span>
			</div>
			<div className="bill__bottomSection">
				<div className="bill__bottomSectionButton">
					<Link to="/checkout">
						<button>CHECK OUT</button>
					</Link>
				</div>
				<div className="bill__bottomSectionWarrant">
					<p>Enjoy Complimentary shipping and returns on your order.</p>
				</div>
			</div>
		</div>
	);
}

export default Bill;
