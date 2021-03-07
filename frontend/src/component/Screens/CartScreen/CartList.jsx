import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import { useStyles } from './cart.styles';

const CartList = ({ item }) => {
	const [input, setInput] = useState(1);
	const { countInStock } = item;
	const classes = useStyles();
	const onIncrease = () => {
		if (input < countInStock) {
			setInput((input) => input + 1);
		} else {
			return;
		}
	};
	const onDecrease = () => {
		if (input < 2) {
			return;
		} else {
			setInput((input) => input - 1);
		}
	};
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
						<RemoveIcon onClick={onDecrease} />
						<InputBase classes={{ input: classes.inputInput }} value={input} />
						<AddIcon onClick={onIncrease} />
					</div>
				</Grid>
				<Grid item xs={2}>
					<IconButton aria-label='delete'>
						<DeleteIcon />
					</IconButton>
				</Grid>
			</Grid>

			<Divider />
		</React.Fragment>
	);
};

export default CartList;
