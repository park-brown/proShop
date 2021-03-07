import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	status: 'idle',
	cartItems: [],
	error: null,
};
export const addToCart = createAsyncThunk(
	'cart/addToCart',
	async ({ id, quantity }) => {
		try {
			const { data } = await axios.get(`/api/products/${id}`);

			return {
				product_id: id,
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
				quantity: quantity,
			};
		} catch (error) {
			return error.response.data.messages;
		}
	},
);

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[addToCart.pending]: (state, action) => {
			state.status = 'loading';
		},
		[addToCart.fulfilled]: (state, action) => {
			state.status = 'succeeded';

			const existingCartItems = state.cartItems.find(
				(item) => item.product_id === action.payload.product_id,
			);
			if (existingCartItems) {
				const index = state.cartItems.findIndex(
					(item) => item.product_id === action.payload.product_id,
				);
				state.cartItems[index].quantity += 1;
			} else state.cartItems.push(action.payload);
		},
		[addToCart.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.payload.error.message;
		},
	},
});

export default cartSlice.reducer;
