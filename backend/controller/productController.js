import AsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@description Fetch all products
//@route GET /api/products
//@access Public
export const getProduct = AsyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});
//@description Fetch single product
//@route GET /api/products/:id
//@access Public
export const getProductById = AsyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('product not found');
	}
});
