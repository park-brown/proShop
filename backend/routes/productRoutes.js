import express from 'express';
import AsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

//@description Fetch all products
//@route GET /api/products
//@access Public
router.get(
	'/',
	AsyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	}),
);
//@description Fetch single product
//@route GET /api/products/:id
//@access Public
router.get(
	'/:id',
	AsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ message: 'product not found' });
		}
	}),
);

export default router;