import { createSlice } from '@reduxjs/toolkit';

export const costSlice = createSlice({
	name: 'cost',
	initialState: {
		subTotal: 0,
		delivery: 90,
		estimatedTotal: 0,
		tax: 20,
	},
	reducers: {
		calculateSubTotal: (state, action) => {
			let subTotal_ = 0;
			let cart_ = action.payload;

            for (let index = 0; index < cart_?.length; index++) {
				const item = cart_[index];
				const totalCostPerItem = item.productCost * item.productQuantity;
				subTotal_ += totalCostPerItem;
			}

			state.subTotal = subTotal_;
		},
		calculateEstimatedTotal: (state) => {
			let total_ = Math.round(state.subTotal + state.delivery + state.tax);
			state.estimatedTotal = total_;
		},
		changeDeliveryCost: (state, action) => {
			state.delivery = action.payload['delivery'];
		},
		changeTaxCost: (state, action) => {
			state.tax = action.payload['tax'];
		},
	},
});

export const { calculateSubTotal, calculateEstimatedTotal, changeDeliveryCost, changeTaxCost } = costSlice.actions;

// Selectors, which allows us to pull information to various components
export const selectSubTotal = (state) => state.cost.subTotal;
export const selectDelivery = (state) => state.cost.delivery;
export const selectEstimatedTotal = (state) => state.cost.estimatedTotal;
export const selectTax = (state) => state.cost.tax;

export default costSlice.reducer;
