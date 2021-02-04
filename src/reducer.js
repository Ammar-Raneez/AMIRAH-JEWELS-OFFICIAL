
export const initialState = {
	cartBasket: [],
	wishListBasket: [],
	user: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'EMPTY_THE_CART_BASKET':
			// Empty the content of the cart array for new user to add their content
			return { ...state, cartBasket: action.item };

		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			// checking if the item is already present in the wishlist (if present we don't add else we add)
			let itemToAddBasket = action.item;
			let presentBasket = false;

			// looping through the list of items to check if its present already
			for (let index = 0; index < state.cartBasket?.length; index++) {
				const element = state.cartBasket[index];
				if (element.name === itemToAddBasket.name) {
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
			const index_cart = state.cartBasket.findIndex((cartItem) => cartItem.name === action.name);

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
			return { state };
		case 'DECREASE_ITEM_COUNT_FROM_BASKET':
			// Logic for decreasing the number of a particular item in a basket
			return { state };
		case 'EMPTY_THE_WISHLIST_BASKET':
			// Empty the content of the wishlist array for new user to add their content
			return { ...state, wishListBasket: action.item };

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
