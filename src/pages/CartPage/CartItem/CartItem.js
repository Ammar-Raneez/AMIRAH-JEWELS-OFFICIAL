import React, { useEffect, useState } from 'react';
import './CartItem.css';
import CloseIcon from '@material-ui/icons/Close';

function CartItem({ img, name, price, currency }) {
	const [qty, setQty] = useState(1);
	const priceForOne = price;
	const [changedPrice, setChangedPrice] = useState(price);

	// useEffect(() => {

	// }, [qty, changedPrice])

	const updatePrice = (updatedQ) => {
		let totalPrice = updatedQ * priceForOne;
		setChangedPrice(totalPrice);
	};

	const increaseQuantity = () => {
		let updatedQ = qty + 1;
		setQty(updatedQ);
		updatePrice(updatedQ);
	};
	const decreaseQuantity = () => {
		let updatedQ = qty - 1;
		if (updatedQ > 0) {
			setQty(updatedQ);
			updatePrice(updatedQ);
		}
	};

	return (
		<div className="cartItem">
			<div className="cartItem__cross">
				<CloseIcon />
			</div>
			<div className="cartItem__description">
				<div className="cartItem__descriptionleft">
					<img src={img} alt="" />
				</div>
				<div className="cartItem__descriptionRight">
					<div className="cartItem__descriptionRightTop">
						{/* <h1 style={{ marginBottom: '8px' }}>Amirah Jewellers</h1> */}
						<h1>{name}</h1>
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
								<p>
									{currency}
									{changedPrice}
								</p>
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
