import React, { useState } from 'react';
import './CartPage.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CartItem from './CartItem/CartItem';
import Bill from './Bill/Bill';

function CartPage() {
	return (
		<div className="cartPage">
			<div className="cartPage__title">
				<h1>MY CART</h1>
				{/* <div className="cartPage__titleContinueSection">
                    <ArrowBackIosIcon />
                    <p>Continue shopping</p>
                </div> */}
			</div>

			<div className="cartPage__main">
				<div className="cartPage__items">
					<CartItem
						productImgURL="gems/orange-sapphire.png"
						productName="Orange Sapphire"
						productCost={890.0}
						productQuantity={3}
					/>
					<CartItem
						productImgURL="gems/teal-sapphire.png"
						productName="Teal Sapphire"
						productCost={540.0}
						productQuantity={5}
					/>
				</div>
				<div className="cartPage__orderSummary">
					<Bill subTotal={890.0} delivery={90.0} tax={20.0} />
				</div>
			</div>
		</div>
	);
}

export default CartPage;
