import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

// const products = [
// 	{
// 		name: 'Product 1',
// 		desc: 'A nice thing',
// 		price: '$9.99',
// 	},
// 	{
// 		name: 'Product 2',
// 		desc: 'Another thing',
// 		price: '$3.45',
// 	},
// 	{
// 		name: 'Product 3',
// 		desc: 'Something else',
// 		price: '$6.51',
// 	},
// 	{
// 		name: 'Product 4',
// 		desc: 'Best thing of all',
// 		price: '$14.11',
// 	},
// 	{ name: 'Shipping', desc: '', price: 'Free' },
// ];

// const addresses = [
// 	'1 Material-UI Drive',
// 	'Reactville',
// 	'Anytown',
// 	'99999',
// 	'USA',
// ];
// const payments = [
// 	{ name: 'Card type', detail: 'Visa' },
// 	{ name: 'Card holder', detail: 'Mr John Doe' },
// 	{ name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
// 	{ name: 'Expiry date', detail: '04/2024' },
// ];

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: 700,
	},
	title: {
		marginTop: theme.spacing(2),
	},
}));

export default function Review() {
	const classes = useStyles();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const total = cartItems.reduce(
		(acc, current) => acc + current.quantity * current.price,
		0,
	);
	const user = useSelector((state) => state.userLogin.user[0]);
	const address1 = useSelector((state) => state.cart.shippingAddress.address1);
	const address2 = useSelector((state) => state.cart.shippingAddress.address2);
	const payment = useSelector((state) => state.cart.paymentDetails);

	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				{cartItems.map((product) => (
					<ListItem className={classes.listItem} key={product.name}>
						<ListItemAvatar>
							<Avatar
								variant='rounded'
								alt={product.name}
								src={product.image}
							/>
						</ListItemAvatar>
						<ListItemText secondary={product.name} />
						<Typography variant='body2'>
							${product.price} * {product.quantity}
						</Typography>
					</ListItem>
				))}

				<ListItem className={classes.listItem}>
					<ListItemText primary='Total' />
					<Typography variant='subtitle1' className={classes.total}>
						${total}
					</Typography>
				</ListItem>
			</List>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Typography variant='h6' gutterBottom className={classes.title}>
						Shipping
					</Typography>
					<Typography gutterBottom>{user.name}</Typography>
					<Typography gutterBottom>{(address1, address2)}</Typography>
				</Grid>
				<Grid item container direction='column' xs={12} sm={6}>
					<Typography variant='h6' gutterBottom className={classes.title}>
						Payment details
					</Typography>
					<Grid container>
						{payment.map((payment) => (
							<React.Fragment key={payment.name}>
								<Grid item xs={6}>
									<Typography gutterBottom>{payment.name}</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{payment.detail}</Typography>
								</Grid>
							</React.Fragment>
						))}
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
