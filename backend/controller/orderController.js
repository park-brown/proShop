import AsyncHandler from 'express-async-handler';

import Order from '../models/orderModel.js';

//@description Create new Order
//@route POST /api/shipping
//@access Public
export const addOrderItems = AsyncHandler(async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippinigPrice,
		totalPrice,
	} = req.body;
	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error('no order items');
	} else {
		const order = new Order({
			orderItems,
			user: req.user._id,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippinigPrice,
			totalPrice,
		});

		const createdNewOrder = await order.save();
		res.status(201).json('create order');
	}
});
