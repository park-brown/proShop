import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	status: 'idle',
	error: null,
	user: [],
};

export const userLogIn = createAsyncThunk(
	'/user/userLogin',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-type': 'application/json',
				},
			};

			const { data } = await axios.post(
				'/api/users/login',
				{ email, password },
				config,
			);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const userSlice = createSlice({
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
		[userLogIn.pending]: (state, action) => {
			state.status = 'loading';
		},
		[userLogIn.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			if (state.user.length < 1) {
				state.user.push(action.payload);
			} else return;
		},
		[userLogIn.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = 'rejected';
		},
	},
});

export default userSlice.reducer;

export const { user_logout } = userSlice.actions;
