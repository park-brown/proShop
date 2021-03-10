import AsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utills/generateToken.js';
//@description Auth user && get token
//@route Post /api/users/login
//@access Public
export const authUser = AsyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid email and password');
	}
});

//@description Get User Profile
//@route GET /api/users/proflie
//@access Private
export const getUserProfile = AsyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('user not found');
	}
});

//@description register a new user
//@route Post /api/users
//@access Public
export const registerUser = AsyncHandler(async (req, res) => {
	const { email, password, name } = req.body;

	const userExist = await User.findOne({ email });
	if (userExist) {
		res.status(400);
		throw new Error('User already exist');
	}

	const user = await User.create({
		name,
		email,
		password,
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('invalid user data');
	}
});

//@description update User Profile
//@route GET /api/users/proflie
//@access Private
export const updateUserProfile = AsyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		if (req.body.password) {
			user.password = req.body.password;
		}
		const updataUser = await user.save();
		res.json({
			_id: updataUser._id,
			name: updataUser.name,
			email: updataUser.email,
			isAdmin: updataUser.isAdmin,
			token: generateToken(updataUser._id),
		});
	} else {
		res.status(404);
		throw new Error('user not found');
	}
});
