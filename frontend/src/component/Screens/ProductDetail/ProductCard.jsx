import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Rating from '@material-ui/lab/Rating';
import { useStyles } from './Product.styles';
const ProductCard = ({ product, history, match }) => {
	const quantity = useSelector(
		(state) => state.product.productDetails.product.countInStock,
	);
	const [qty, setQty] = useState(0);
	const handleChange = (e) => {
		setQty(e.target.value);
	};
	const addToCart = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={6}>
					<Grid item>
						<img className={classes.img} alt='complex' src={product.image} />
					</Grid>
					<Grid item xs={12} sm container>
						<Grid
							item
							xs
							container
							direction='column'
							spacing={4}
							className={classes.container}>
							<Grid item xs>
								<Typography gutterBottom variant='subtitle1'>
									{product.name}
								</Typography>
								<Typography
									className={classes.review}
									variant='body2'
									gutterBottom>
									<Rating
										value={product.rating ? product.rating : 0}
										name='rating'
									/>
									{product.numReviews} reviews
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body2' style={{ cursor: 'pointer' }}>
									{product.description}
								</Typography>
							</Grid>
						</Grid>
						<Grid item className={classes.lastItem}>
							<Typography variant='subtitle1'>
								Price: {product.price}
							</Typography>
							<Typography variant='subtitle1'>
								Status: {product.countInStock > 0 ? 'in stock' : 'out of stock'}
							</Typography>
							<FormControl className={classes.formControl} size='small'>
								<InputLabel htmlFor='quantity-native-simple'>
									Quantity
								</InputLabel>
								<Select
									native
									variant='standard'
									value={qty}
									onChange={handleChange}
									MenuProps={{ classes: { paper: classes.menuPaper } }}
									inputProps={{
										name: 'quantity',
										id: 'quanitiy-native-simple',
									}}>
									{[...Array(quantity).keys()].map((item) => (
										<option value={item + 1} key={item}>
											{item + 1}
										</option>
									))}
								</Select>
							</FormControl>
							<Button
								onClick={addToCart}
								classes={{ root: classes.button }}
								disabled={product.countInStock === 0}>
								Add to Cart
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default ProductCard;
