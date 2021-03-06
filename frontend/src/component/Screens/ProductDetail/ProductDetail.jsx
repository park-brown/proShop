import React, { useEffect } from 'react';
// import { useStyles } from './Product.styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import { fetchProductDetails } from '../../../features/productListSlice';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';

const ProductDetail = ({ match: { params }, history, match }) => {
	// const product = products.find((item) => item._id === params.id);
	const dispatch = useDispatch();
	const productDetail = useSelector(
		(state) => state.product.productDetails || {},
	);
	const { product, status, error } = productDetail;

	useEffect(() => {
		dispatch(fetchProductDetails(params.id));
	}, [dispatch, params.id]);

	let content;

	if (status === 'loading') {
		content = (
			<div>
				<LinearProgress color='secondary' />
			</div>
		);
	} else if (status === 'succeeded') {
		content = <ProductCard product={product} history={history} match={match} />;
	} else if (status === 'failed') {
		content = <div>{error}</div>;
	}

	// const classes = useStyles();

	return <div>{content}</div>;
};

export default ProductDetail;
