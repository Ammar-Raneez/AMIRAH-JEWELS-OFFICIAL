import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import currencySymbolReducer from '../features/currencySymbolSlice';
import currencyRateReducer from '../features/currencyRateSlice';
import cartReducer from '../features/cartSlice';
import wishlistReducer from '../features/wishlistSlice';
import costReducer from '../features/costSlice';
import { loadFromLocalStorage, saveToLocalStorage } from './redux-persist';

const persistedState = loadFromLocalStorage();

export const store = configureStore({
	reducer: {
		user: userReducer,
		symbol: currencySymbolReducer,
		rate: currencyRateReducer,
		cart: cartReducer,
		wishlist: wishlistReducer,
		cost: costReducer,
	},

	preloadedState: persistedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));
