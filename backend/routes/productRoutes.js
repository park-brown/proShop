import express from 'express';
import { getProduct, getProductById } from '../controller/productController.js';

const router = express.Router();

//@description Fetch all products
//@route GET /api/products
//@access Public
router.route('/').get(getProduct);
//@description Fetch single product
//@route GET /api/products/:id
//@access Public
router.route('/:id').get(getProductById);

export default router;
