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
			return {
				...state,
				wishListBasket: [...state.wishListBasket, action.item],
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
