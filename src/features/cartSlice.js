import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			let cart_ = state.cart;
			let presentBasket = false;

			for (let index = 0; index < cart_?.length; index++) {
				const element = cart_[index];
				if (element?.productName === action.payload?.productName) {
					presentBasket = true;
				}
			}

			!presentBasket && cart_.push(action.payload);
			state.cart = cart_;
		},

		removeFromCart: (state, action) => {
			let cart_ = state.cart;
			const deleteIndex = state.cart.findIndex(
				(cartItem) => cartItem.productName === action.payload['productName']
			);

			if (deleteIndex >= 0) {
				cart_.splice(deleteIndex, 1);
			} else {
				console.warn(`Cant remove product, as its not in the cart basket`);
			}

			state.cart = cart_;
		},
		incrementItemCount: (state, action) => {
			let itemName = action.payload['itemName'];
			let cart_ = state.cart;

			for (let index = 0; index < cart_?.length; index++) {
				if (cart_[index].productName === itemName) {
					cart_[index].productQuantity += 1;
				}
			}

			state.cart = cart_;
		},
		decrementItemCount: (state, action) => {
			let itemName = action.payload['itemName'];
			let cart_ = state.cart;

			// loop through the list of items in the cart and find for the item to be updated
			for (let index = 0; index < cart_?.length; index++) {
				if (cart_[index].productName === itemName) {
					// now we can increment the quantity of the item
					if (cart_[index].productQuantity > 1) {
						cart_[index].productQuantity -= 1;
					}
				}
			}

			state.cart = cart_;
		},
	},
});

export const { addToCart, removeFromCart, incrementItemCount, decrementItemCount } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
