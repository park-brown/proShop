import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	products: {
		status: 'idle',
		productList: [],
		error: null,
	},
	productDetails: {
		status: 'idle',
		product: [],
		error: null,
	},
};
export const fetchProducts = createAsyncThunk(
	'product/fetchProducts',
	async () => {
		try {
			const response = await axios.get('/api/products');
			return response.data;
		} catch (error) {
			return error.response.data.message;
		}
	},
);

export const fetchProductDetails = createAsyncThunk(
	'product/productDetails',
	async (product_id) => {
		try {
			const response = await axios.get(`/api/products/${product_id}`);
			return response.data;
		} catch (error) {
			return error.response.data.message;
		}
	},
);

const productListSlice = createSlice({
	name: 'product',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		//fetch all product reducer
		[fetchProducts.pending]: (state, action) => {
			state.products.status = 'loading';
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.products.status = 'succeeded';
			state.products.productList = action.payload;
		},
		[fetchProducts.failed]: (state, action) => {
			state.products.status = 'failed';
			state.products.error = action.payload.error.message;
		},
		// fetch product detail reducer //
		[fetchProductDetails.pending]: (state, action) => {
			state.productDetails.status = 'loading';
		},
		[fetchProductDetails.fulfilled]: (state, action) => {
			state.productDetails.status = 'succeeded';
			state.productDetails.product = action.payload;
		},
		[fetchProductDetails.failed]: (state, action) => {
			state.productDetails.status = 'failed';
			state.productDetails.error = action.payload.error.message;
		},
	},
});

export default productListSlice.reducer;

// export const {} = productListSlice.actions;
