export const initialState = {
	cartBasket: [],
	wishListBasket: [],
	user: null,
	subTotal: 0,
	tax: 20,
	delivery: 90,
	estimatedTotal: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		case 'SET_SUBTOTAL':
			// setting the sub total price
			let updatedSubtotal = 0;

			// LOGIC: loop through the cart items and update the sub total value
			// looping through the list of items to check if its present already
			for (let index = 0; index < state.cartBasket?.length; index++) {
				const item = state.cartBasket[index];
				// calculate total cost for each item in the basket
				const totalCostPerItem = item.productCost * item.productQuantity;
				updatedSubtotal += totalCostPerItem;
			}

			console.log('This is the updated sub total', updatedSubtotal);
			return { ...state, subTotal: updatedSubtotal };

		case 'SET_TAX':
			// setting the tax value (default value of tax is set to 20)
			return { state };

		case 'SET_DELIVERY':
			// setting the delivery cost (default value of delivery is to 90)
			return { state };

		case 'SET_ESTIMATED_TOTAL':
			// setting the estimated total cost
			return { state };

		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			// checking if the item is already present in the wishlist (if present we don't add else we add)
			let itemToAddBasket = action.item;
			let presentBasket = false;

			// looping through the list of items to check if its present already
			for (let index = 0; index < state.cartBasket?.length; index++) {
				const element = state.cartBasket[index];
				if (element.productName === itemToAddBasket.productName) {
					presentBasket = true;
				}
			}

			return {
				...state,
				cartBasket: !presentBasket ? [...state.cartBasket, action.item] : [...state.cartBasket],
			};

		case 'REMOVE_FROM_BASKET':
			// Logic for removing item to basket
			// we cloned the basket
			let newCartListBasket = [...state.cartBasket];

			// finding the index of the item we are looking for to be deleted from the list
			const index_cart = state.cartBasket.findIndex((cartItem) => cartItem.productName === action.productName);

			if (index_cart >= 0) {
				// item exists in wishlist basket, remove it (removes the item from the basket for the index)
				newCartListBasket.splice(index_cart, 1);
			} else {
				console.warn(`Cant remove product id ${action.id} as its not in the cart basket`);
			}

			// return the updated basket back
			return { ...state, cartBasket: newCartListBasket };

		case 'INCREASE_ITEM_COUNT_FROM_BASKET':
			// Logic for increasing the number of a particular item in a basket
			let itemName = action.itemName;
			let cloneCart = [...state.cartBasket];

			// loop through the list of items in the cart and find for the item to be updated
			for (let index = 0; index < cloneCart?.length; index++) {
				if (cloneCart[index].productName === itemName) {
					// now we can increment the quantity of the item
					cloneCart[index].productQuantity += 1;
				}
			}

			return { ...state, cartBasket: cloneCart };

		case 'DECREASE_ITEM_COUNT_FROM_BASKET':
			// Logic for decreasing the number of a particular item in a basket
			let itemNAME = action.itemName;
			let cloneCART = [...state.cartBasket];

			// loop through the list of items in the cart and find for the item to be updated
			for (let index = 0; index < cloneCART?.length; index++) {
				if (cloneCART[index].productName === itemNAME) {
					// now we can increment the quantity of the item
					if (cloneCART[index].productQuantity > 1) {
						cloneCART[index].productQuantity -= 1;
					}
				}
			}

			return { ...state, cartBasket: cloneCART };

		case 'ADD_TO_WISHLIST':
			// Logic for adding item to the wishlist

			// checking if the item is already present in the wishlist (if present we don't add else we add)
			let itemToAddWishlist = action.item;
			let presentWishlist = false;

			// looping through the list of items to check if its present already
			for (let index = 0; index < state.wishListBasket?.length; index++) {
				const element = state.wishListBasket[index];
				if (element.name === itemToAddWishlist.name) {
					presentWishlist = true;
				}
			}

			return {
				...state,
				wishListBasket: !presentWishlist ? [...state.wishListBasket, action.item] : [...state.wishListBasket],
			};

		case 'REMOVE_FROM_WISHLIST':
			// Logic for removing item to the wishlist

			// we cloned the basket
			let newWishListBasket = [...state.wishListBasket];

			// finding the index of the item we are looking for to be deleted from the list
			const index_wish = state.wishListBasket.findIndex((wishListItem) => wishListItem.name === action.name);

			if (index_wish >= 0) {
				// item exists in wishlist basket, remove it (removes the item from the basket for the index)
				newWishListBasket.splice(index_wish, 1);
			} else {
				console.warn(`Cant remove product id ${action.id} as its not in the wishlist basket`);
			}

			// console.log("This is the old wishlist content:", state.wishListBasket);
			// console.log("This is the new wishlist content:", newWishListBasket);

			// return the updated basket back
			return { ...state, wishListBasket: newWishListBasket };

		default:
			return state;
	}
};

export default reducer;

// Details of the wishlist for each item
// itemImage
// cost of item
// name of the item

// Details of the cart for each item
