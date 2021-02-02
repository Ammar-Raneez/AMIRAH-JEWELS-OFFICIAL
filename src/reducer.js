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
		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			return { state };
		case 'REMOVE_FROM_BASKET':
			// Logic for removing item to basket
			return { state };
		case 'ADD_TO_WISHLIST':
			// Logic for adding item to the wishlist

			// checking if the item is already present in the wishlist (if present we don't add else we add)
			let itemToAdd = action.item;
			let present = false;

			// looping through the list of items to check if its present already
			for (let index = 0; index < state.wishListBasket.length; index++) {
				const element = state.wishListBasket[index];
				if (element.name === itemToAdd.name) {
					present = true;
				}
			}

			return {
				...state,
				wishListBasket: !present ? [...state.wishListBasket, action.item] : [...state.wishListBasket],
			};

		case 'REMOVE_FROM_WISHLIST':
			// Logic for removing item to the wishlist

			// we cloned the basket
			let newWishListBasket = [...state.wishListBasket];

			// finding the index of the item we are looking for to be deleted from the list
			const index = state.wishListBasket.findIndex((wishListItem) => wishListItem.name === action.name);

			if (index >= 0) {
				// item exists in wishlist basket, remove it (removes the item from the basket for the index)
				newWishListBasket.splice(index, 1);
			} else {
				console.warn(`Cant remove product id ${action.id} as its not in the wishlist basket`);
			}

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
