import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState: {
		wishlist: [],
	},

	reducers: {
		addToWishlist: (state, action) => {
			let wishlist_ = state.wishlist;
			let presentWishlist = false;

			// looping through the list of items to check if its present already
			for (let index = 0; index < wishlist_?.length; index++) {
				const element = wishlist_[index];
				if (element.name === action.payload?.name) {
					presentWishlist = true;
				}
			}

			!presentWishlist && wishlist_.push(action.payload);
			state.wishlist = wishlist_;
		},

		removeFromWishlist: (state, action) => {
			let wishlist_ = state.wishlist;
			const deleteIndex = wishlist_.findIndex((item) => item?.name === action.payload['name']);

			if (deleteIndex >= 0) {
				// item exists in wishlist basket, remove it (removes the item from the basket for the index)
				wishlist_.splice(deleteIndex, 1);
			} else {
				console.warn(`Cant remove product id ${action.id} as its not in the wishlist basket`);
			}

			state.wishlist = wishlist_;
		},
	},
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlist = (state) => state.wishlist.wishlist;
export default wishlistSlice.reducer;
