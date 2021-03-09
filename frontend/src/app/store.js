import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productListReducer from '../features/productListSlice';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';

export default configureStore({
	reducer: {
		product: productListReducer,
		cart: cartReducer,
		userLogin: userReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: {
			// Ignore these action types
			ignoredActions: ['/user/userLogin/rejected'],
			// Ignore these field paths in all actions
			ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
			// Ignore these paths in the state
			ignoredPaths: ['items.dates'],
		},
	}),
});
