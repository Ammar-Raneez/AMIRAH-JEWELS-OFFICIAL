import { createSlice } from '@reduxjs/toolkit';

export const currencyRateSlice = createSlice({
	name: 'currency-rate',
	initialState: {
		rate:  1.0,
	},

	reducers: {
		changeRate: (state, action) => {
			state.rate = action.payload;
		},
	},
});

export const { changeRate } = currencyRateSlice.actions;
export const selectCurrencyRate = (state) => state.rate.rate;
export default currencyRateSlice.reducer;
