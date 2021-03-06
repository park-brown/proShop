import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../features/productListSlice';
export default configureStore({
	reducer: {
		product: productListReducer,
	},
});
