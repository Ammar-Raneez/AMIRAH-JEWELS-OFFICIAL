import React, { useEffect, useState } from 'react';
import './CartItem.css';
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../../../StateProvider';
import { db } from '../../../firebase';

function CartItem({ productCost, productImgURL, productName, productQuantity }) {
	const [qty, setQty] = useState(productQuantity);
	const priceForOne = productCost;
	const [changedPrice, setChangedPrice] = useState(productCost * productQuantity);
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	// FUNCTION TO REMOVE ITEM FROM THE ReactCONT API LIST AND UPDATE LAST ITEM REMOVE FROM
	// CLOUD STORE
	const removeItemFromCart = () => {
		if (user) {
			// REMOVING THE ITEM FROM THE REACT CONTEXT API VARIABLES
			dispatch({
				type: 'REMOVE_FROM_BASKET',
				productName: productName,
			});
			console.log(cartBasket, '<===============> CHECK THIS ONE');

			// LAST ITEM REMOVE PROBLEM ALTERNATE SOLUTION
			// if (wishListBasket.length === 1) {
			// 	db.collection('users').doc(user?.email).update({
			// 		wishlist: [],
			// 	});
			// }
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	const updatePrice = (updatedQ) => {
		let totalPrice = updatedQ * priceForOne;
		setChangedPrice(totalPrice);
	};

	const increaseQuantity = () => {
		let updatedQ = qty + 1;
		setQty(updatedQ);
		updatePrice(updatedQ);

		// updating the quantity of the item from the context api cart
		dispatch({
			type: 'INCREASE_ITEM_COUNT_FROM_BASKET',
			itemName: productName,
		});

		// updating the sub total
		dispatch({
			type: 'SET_SUBTOTAL',
		});
	};
	const decreaseQuantity = () => {
		let updatedQ = qty - 1;
		if (updatedQ > 0) {
			setQty(updatedQ);
			updatePrice(updatedQ);
		}
		// updating the quantity of the item from the context api cart
		dispatch({
			type: 'DECREASE_ITEM_COUNT_FROM_BASKET',
			itemName: productName,
		});
		// updating the sub total
		dispatch({
			type: 'SET_SUBTOTAL',
		});
	};

	return (
		<div className="cartItem">
			<div className="cartItem__cross" onClick={removeItemFromCart}>
				<CloseIcon />
			</div>
			<div className="cartItem__description">
				<div className="cartItem__descriptionleft">
					<img src={productImgURL} alt="" />
				</div>
				<div className="cartItem__descriptionRight">
					<div className="cartItem__descriptionRightTop">
						<h1>{productName}</h1>
					</div>
					<div className="cartItem__descriptionRightBottom">
						<div className="cartItem__descriptionRightBottomQty">
							<p>Qty</p>
						</div>
						<div className="cartItem__descriptionRightBottomDetails">
							<div>
								<button style={{ padding: '5px 10px', background: 'transparent', border: 'none' }} onClick={decreaseQuantity}>
									-
								</button>
								<input style={{ textAlign: 'right', padding: '10px', width: '30px', background: 'transparent', border: 'none' }} type="number" disabled={true} name="Quantity" placeholder="Quantity" value={qty} />
								<button style={{ padding: '5px 10px', background: 'transparent', border: 'none' }} onClick={increaseQuantity}>
									+
								</button>
							</div>
							<span>
								{/* <p>Price</p> */}
								<p>${changedPrice}</p>
							</span>
						</div>
					</div>
					<div className="cartItem__descriptionRightSave">
						<p>Add to Wishlist</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
