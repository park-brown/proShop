// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './midderware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const app = express();

dotenv.config();

connectDB();

app.get('/', (req, res) => {
	res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
