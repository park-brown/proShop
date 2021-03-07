import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../features/productListSlice';
import cartReducer from '../features/cartSlice';
export default configureStore({
	reducer: {
		product: productListReducer,
		cart: cartReducer,
	},
});
