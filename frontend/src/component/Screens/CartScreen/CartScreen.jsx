import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from './CartList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
	const total = cartItems
		.reduce((acc, item) => acc + item.price * item.quantity, 0)
		.toFixed(2);
	const handleClick = () => {
		history.push('/login?redirect=shipping');
	};

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
					<Box
						ml='auto'
						border={1}
						borderColor='grey.300'
						mt={2}
						p={2}
						borderRadius={8}>
						<Typography variant='h6' gutterBottom textAlign='center'>
							total:${total}
						</Typography>
						<Button variant='contained' color='primary' onClick={handleClick}>
							Proceed To CheckOut
						</Button>
					</Box>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default CartScreen;
