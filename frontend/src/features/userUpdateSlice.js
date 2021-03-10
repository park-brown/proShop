import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	status: 'idle',
	error: null,
	user: [],
};

export const getUserProfile = createAsyncThunk(
	'/user/getUserProfile',
	async ({ id }, { rejectWithValue, getState }) => {
		try {
			const {
				userLogin: { user },
			} = getState();

			const config = {
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${user[0].token}`,
				},
			};
			console.log(id);

			const { data } = await axios.get(
				`api/users/${id}`,

				config,
			);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const updateUserProfile = createAsyncThunk(
	'/user/getUserProfile',
	async ({ id, name, email, password }, { rejectWithValue, getState }) => {
		try {
			const {
				userLogin: { user },
			} = getState();

			const config = {
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${user[0].token}`,
				},
			};

			const { data } = await axios.put(
				`api/users/profile`,
				{ id, name, email, password },

				config,
			);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const userUpdateSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[getUserProfile.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getUserProfile.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.user = action.payload;
		},
		[getUserProfile.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = 'rejected';
		},
		[updateUserProfile.pending]: (state, action) => {
			state.status = 'loading';
		},
		[updateUserProfile.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.user = action.payload;
		},
		[updateUserProfile.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = 'rejected';
		},
	},
});

export default userUpdateSlice.reducer;
