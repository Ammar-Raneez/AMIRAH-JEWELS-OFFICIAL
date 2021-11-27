import { createSlice } from '@reduxjs/toolkit';

export const authorizedSlice = createSlice({
	name: 'isAuthorized',
	initialState: {
		isAuthorized: false,
	},

	reducers: {
		allow: (state, action) => {
			state.isAuthorized = true;
		},

		reject: (state) => {
			state.isAuthorized = false;
		},
	},
});

export const { allow, reject } = authorizedSlice.actions;
export const isAuthorized = (state) => state.isAuthorized.isAuthorized;
export default authorizedSlice.reducer;