import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { addToCart } from '../../../features/cartSlice';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useStyles } from './cart.styles';
import Divider from '@material-ui/core/Divider';
const CartScreen = ({ match, location, history }) => {
	const product_id = match.params.id;
	const classes = useStyles();
	const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const status = useSelector((state) => state.cart.status);

	useEffect(() => {
		if (product_id) {
			dispatch(addToCart({ id: product_id, quantity: quantity }));
		}
	}, [dispatch, product_id]);

	return (
		<React.Fragment>
			{status === 'loading' ? <LinearProgress /> : null}
			<Container maxWidth={'sm'} className={classes.container}>
				<Typography variant='h4' gutterBottom className={classes.header}>
					Shopping Cart
				</Typography>
				<Divider />
				{status === 'succeeded' ? (
					cartItems.map((item) => (
						<CartList item={item} key={item.product_id} />
					))
				) : (
					<Typography> Your Cart is empty</Typography>
				)}
				<Grid container>
					<Box ml='auto'>
						<Typography variant='h6'>total:$2000</Typography>
					</Box>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default CartScreen;
