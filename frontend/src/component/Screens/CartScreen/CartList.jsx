import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './cart.styles';
import {
	increment_quantity,
	decrement_quantity,
	removeItem,
} from '../../../features/cartSlice';

const CartList = ({ item }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const { quantity } = cartItems.find(
		(element) => element.product_id === item.product_id,
	);
	const handleChange = () => {};

	return (
		<React.Fragment>
			<Grid container className={classes.grid_container} spacing={2}>
				<Grid item className={classes.image_Container}>
					<img alt='test' src={item.image} className={classes.image} />
				</Grid>
				<Hidden xsDown>
					<Grid item xs={2}>
						<Typography variant='body1' color='initial'>
							{item.name}
						</Typography>
					</Grid>
				</Hidden>
				<Grid item xs={2}>
					<Typography variant='subtitle2' color='initial'>
						${item.price}
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<div className={classes.quantity}>
						<RemoveIcon
							className={classes.icon}
							onClick={() => {
								dispatch(decrement_quantity(item.product_id));
							}}
						/>
						<InputBase
							classes={{ input: classes.inputInput }}
							value={quantity}
							onChange={handleChange}
						/>
						<AddIcon
							className={classes.icon}
							onClick={() => {
								dispatch(increment_quantity(item.product_id));
							}}
						/>
					</div>
				</Grid>
				<Grid item xs={2}>
					<IconButton
						aria-label='delete'
						onClick={() => {
							dispatch(removeItem(item.product_id));
						}}>
						<DeleteIcon />
					</IconButton>
				</Grid>
			</Grid>

			<Divider />
		</React.Fragment>
	);
};

export default CartList;
