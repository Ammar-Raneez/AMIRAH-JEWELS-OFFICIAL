import React, { useEffect } from 'react';
import './CartItem.css';
import CloseIcon from '@material-ui/icons/Close';
import formatCurrency from 'format-currency';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrementItemCount,
	incrementItemCount,
	removeFromCart,
	selectCart
} from '../../../features/cartSlice';
import { addToWishlist } from '../../../features/wishlistSlice';
import { selectCurrencySymbol } from '../../../features/currencySymbolSlice';
import { selectCurrencyRate } from '../../../features/currencyRateSlice';
import { calculateSubTotal } from '../../../features/costSlice';

function CartItem({
	productCost,
	productImgURL,
	productName,
	productQuantity,
	preferredMetal,
	preferredSize
}) {
	const cartBasket = useSelector(selectCart);
	const dispatch = useDispatch();
	const currencySymbol = useSelector(selectCurrencySymbol);
	const currencyRate = useSelector(selectCurrencyRate);

	useEffect(() => {
		dispatch(calculateSubTotal(cartBasket));
	}, [cartBasket, dispatch]);

	const removeItemFromCart = () => {
		dispatch(
			removeFromCart({
				productName: productName,
			})
		);
	}

	const increaseQuantity = () => {
		dispatch(
			incrementItemCount({
				itemName: productName,
			})
		);
	}

	const decreaseQuantity = () => {
		dispatch(
			decrementItemCount({
				itemName: productName,
			})
		);
	}

	const addItemToWishList = () => {
		dispatch(
			addToWishlist({
				name: productName,
				cost: productCost,
				imgURL: productImgURL,
				preferredMetal: preferredMetal,
				preferredSize: preferredSize,
			})
		);
	}

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
						<h1>
							{productName} {preferredMetal !== null && ` • ${preferredMetal} • `}
							{preferredSize !== null && ` ${preferredSize}  `}
						</h1>
					</div>
					<div className="cartItem__descriptionRightBottom">
						<div className="cartItem__descriptionRightBottomQty">
							<p>Qty</p>
						</div>
						<div className="cartItem__descriptionRightBottomDetails">
							<div>
								<button
									style={{
										padding: '0.5vw 1vw',
										fontSize: '1.5vw',
										background: 'transparent',
										border: 'none',
										cursor: 'pointer',
									}}
									onClick={decreaseQuantity}
								>
									−
								</button>
								<input
									style={{
										textAlign: 'center',
										padding: '1vw',
										width: '3vw',
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
									style={{
										padding: '0.5vw 0vw',
										fontSize: '1.5vw',
										background: 'transparent',
										border: 'none',
										cursor: 'pointer',
									}}
									onClick={increaseQuantity}
								>
									+
								</button>
							</div>
							<span>
								<p>
									{currencySymbol}
									{formatCurrency(
										(productQuantity * Math.round(productCost * currencyRate * 100)) / 100
									)}
								</p>
							</span>
						</div>
					</div>
					<div className="cartItem__descriptionRightSave">
						<p onClick={addItemToWishList}>Add to Wishlist</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
