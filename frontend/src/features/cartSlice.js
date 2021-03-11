import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	status: 'idle',
	cartItems: [],
	error: null,
	shippingAddress: {},
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
	reducers: {
		increment_quantity: (state, action) => {
			const id = action.payload;
			const indexOf = state.cartItems.findIndex(
				(item) => item.product_id === id,
			);

			if (
				state.cartItems[indexOf].countInStock >
				state.cartItems[indexOf].quantity
			) {
				state.cartItems[indexOf].quantity += 1;
			} else return;
		},
		// decrement_quantity: (state, action) => {
		// 	console.log(1);
		// },
		decrement_quantity: (state, action) => {
			const id = action.payload;
			const indexOf = state.cartItems.findIndex(
				(item) => item.product_id === id,
			);
			if (state.cartItems[indexOf].quantity > 1) {
				state.cartItems[indexOf].quantity -= 1;
			} else return;
		},
		removeItem: (state, action) => {
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.product_id !== action.payload,
				),
			};
		},
		cart_save_shipping_address: (state, action) => {
			state.shippingAddress = action.payload;
		},
	},
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
export const {
	increment_quantity,
	decrement_quantity,
	removeItem,
	cart_save_shipping_address,
} = cartSlice.actions;
