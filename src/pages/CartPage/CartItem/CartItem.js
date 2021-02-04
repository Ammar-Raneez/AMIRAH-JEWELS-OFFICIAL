import React, { useEffect, useState } from 'react';
import './CartItem.css';
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../../../StateProvider';
import { db } from '../../../firebase';

function CartItem({ productCost, productImgURL, productName, productQuantity }) {
	const [qty, setQty] = useState(productQuantity);
	const priceForOne = productCost;
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();
	const [updateWishList, setUpdateWishList] = useState(false);
	const [updateCartList, setUpdateCartList] = useState(false);

	// UPDATE THE CART DETAILS IN THE FIRE-STORE WHEN CHANGES ARE MADE
	useEffect(() => {
		// REMOVING THE ITEM FROM THE DATABASE
		console.log('UPDATED WISHLIST FROM THE USE EFFECT', cartBasket);
		if (updateCartList === true) {
			db.collection('users').doc(user?.email).update({
				cart: cartBasket,
			});
		}
		setUpdateCartList(true);
	}, [cartBasket]);

	// UPDATE THE WISHLIST DATABASE CONTENT (FIRE-STORE)
	useEffect(() => {
		console.log('outside the database section');
		if (updateWishList === true) {
			console.log('inside the database section');
			db.collection('users').doc(user?.email).update({
				wishlist: wishListBasket,
			});
		}
		setUpdateWishList(true);
	}, [wishListBasket]);

	// FUNCTION TO REMOVE ITEM FROM THE ReactCONT API LIST AND UPDATE LAST ITEM REMOVE FROM
	// CLOUD STORE
	const removeItemFromCart = () => {
		if (user) {
			// REMOVING THE ITEM FROM THE REACT CONTEXT API VARIABLES
			dispatch({
				type: 'REMOVE_FROM_BASKET',
				productName: productName,
			});

			// updating the sub total
			dispatch({
				type: 'SET_SUBTOTAL',
			});

			console.log(cartBasket, '<===============> CHECK THIS ONE');

			// LAST ITEM REMOVE PROBLEM ALTERNATE SOLUTION
			if (cartBasket.length === 1) {
				db.collection('users').doc(user?.email).update({
					cart: [],
				});
			}
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	// INCREASING THE QUANTITY BY ONE
	const increaseQuantity = () => {
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

	// DECREASING THE QUANTITY OF THE ITEM BY ONE
	const decreaseQuantity = () => {
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

	// ADDING ITEM INTO THE WISHLIST
	const addItemToWishList = () => {
		// ADDING THE ITEM INTO THE WISHLIST REDUCER LIST
		if (user) {
			console.log('adding the item into the wishlist reducer');
			dispatch({
				type: 'ADD_TO_WISHLIST',
				item: {
					name: productName,
					cost: productCost,
					imgURL: productImgURL,
				},
			});
		} else {
			alert('Please sign in to add item to wishlist');
		}

		// UPDATING THE CLOUD FIRE-STORE WISHLIST COLLECTION (using a useEffect)
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
								<button
									style={{ padding: '5px 10px', background: 'transparent', border: 'none' }}
									onClick={decreaseQuantity}
								>
									-
								</button>
								<input
									style={{
										textAlign: 'right',
										padding: '10px',
										width: '30px',
										background: 'transparent',
										border: 'none',
									}}
									type="number"
									disabled={true}
									name="Quantity"
									placeholder="Quantity"
									value={productQuantity}
								/>
								<button
									style={{ padding: '5px 10px', background: 'transparent', border: 'none' }}
									onClick={increaseQuantity}
								>
									+
								</button>
							</div>
							<span>
								{/* <p>Price</p> */}
								<p>${productQuantity * productCost}</p>
							</span>
						</div>
					</div>
					<div className="cartItem__descriptionRightSave" onClick={addItemToWishList}>
						<p>Add to Wishlist</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
