export const initialState = {
	basket: [],
	user: null,
};

function reducer(state, action) {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			break;
		case 'REMOVE_FROM_BASKET':
			// Logic for removing item to basket
			break;
		default:
			return state;
	}
}

export default reducer;
