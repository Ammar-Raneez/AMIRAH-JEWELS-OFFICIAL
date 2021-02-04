import React, { useEffect, useState } from 'react';
import './CartPage.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CartItem from './CartItem/CartItem';
import Bill from './Bill/Bill';
import { useStateValue } from '../../StateProvider';

function CartPage() {
	const [{ wishListBasket, cartBasket, user, subTotal, delivery, tax }, dispatch] = useStateValue();

	useEffect(() => {
		console.log(cartBasket);
		// updating the sub total
		dispatch({
			type: 'SET_SUBTOTAL',
		});
	}, []);

	return (
		<div className="cartPage">
			<div className="cartPage__title">
				<h1>MY CART</h1>
				{/* <div className="cartPage__titleContinueSection">
                    <ArrowBackIosIcon />
                    <p>Continue shopping</p>
                </div> */}
			</div>

			{cartBasket.length != 0 ? (
				<div className="cartPage__main">
					<div className="cartPage__items">
						{cartBasket?.map((item) => (
							<CartItem
								key={item.productName}
								productImgURL={item.productImgURL}
								productName={item.productName}
								productCost={item.productCost}
								productQuantity={item.productQuantity}
							/>
						))}
						{/* <CartItem
							productImgURL="pendantsNecklace/pink_necklace.png"
							productName="Orange Sapphire"
							productCost={890.0}
							productQuantity={3}
						/>
						<CartItem
							productImgURL="gems/teal-sapphire.png"
							productName="Teal Sapphire"
							productCost={540.0}
							productQuantity={2}
						/> */}
					</div>
					<div className="cartPage__orderSummary">
						<Bill subTotal={subTotal} delivery={delivery} tax={tax} />
					</div>
				</div>
			) : (
				<div className="cartPage__itemsEmpty">
					<h1>Your Cart is Empty</h1>
					<p>Add Items into Your Cart to Display them Here</p>
				</div>
			)}
		</div>
	);
}

export default CartPage;
