import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import productListReducer from '../features/productListSlice';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';
import userRegisterReducer from '../features/userRegisterSlice';
import userUpdateReducer from '../features/userUpdateSlice';

const reducers = combineReducers({
	product: productListReducer,
	cart: cartReducer,
	userLogin: userReducer,
	userRegister: userRegisterReducer,
	userUpdateProfile: userUpdateReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			// Ignore these action types
			ignoredActions: ['/user/userLogin/rejected', 'persist/PERSIST'],
			// Ignore these field paths in all actions
			ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
			// Ignore these paths in the state
			ignoredPaths: ['items.dates'],
		},
	}),
});
