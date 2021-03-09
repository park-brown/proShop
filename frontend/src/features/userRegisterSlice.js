import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	status: 'idle',
	error: null,
	user: [],
};

export const userRegister = createAsyncThunk(
	'/user/userRegister',
	async ({ name, email, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-type': 'application/json',
				},
			};

			const { data } = await axios.post(
				'/api/users',
				{ name, email, password },
				config,
			);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
const userRegisterSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		user_logout: (state, action) => {
			return {
				...state,

				user: [],
			};
		},
	},
	extraReducers: {
		[userRegister.pending]: (state, action) => {
			state.status = 'loading';
		},
		[userRegister.fulfilled]: (state, action) => {
			state.status = 'succeeded';
		},
		[userRegister.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = 'rejected';
		},
	},
});

export default userRegisterSlice.reducer;

export const { user_logout } = userRegisterSlice.actions;
