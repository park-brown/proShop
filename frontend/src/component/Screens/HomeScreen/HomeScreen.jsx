import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HomeCard from '../../HomeCard/HomeCard';
// import products from '../../../products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../features/productListSlice';
import { useStyles } from './HomeScreen.styles';
import Grid from '@material-ui/core/Grid';
const HomeScreen = () => {
	const status = useSelector((state) => state.product.products.status);
	const products = useSelector((state) => state.product.products.productList);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='md' className={classes.container}>
				<Typography variant='h3'>Latest Products</Typography>
				<Grid container spacing={6} className={classes.grid}>
					{products !== undefined
						? products.map((product) => (
								<HomeCard key={product._id} product={product} />
						  ))
						: null}
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default HomeScreen;
