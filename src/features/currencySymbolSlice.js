import { createSlice } from '@reduxjs/toolkit';

export const currencySymbolSlice = createSlice({
	name: 'currency-symbol',
	initialState: {
		symbol: '$',
	},
	reducers: {
		changeSymbol: (state, action) => {
			state.symbol = action.payload;
		},
	},
});

export const { changeSymbol } = currencySymbolSlice.actions;

export const selectCurrencySymbol = (state) => state.symbol.symbol;

export default currencySymbolSlice.reducer;
