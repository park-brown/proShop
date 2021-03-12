import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm({ value, onChange }) {
	const { cardName, cardNumber, expireDate, cvv } = value;
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Payment method
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='cardName'
						name='cardName'
						value={cardName}
						label='Name on card'
						onChange={onChange}
						fullWidth
						autoComplete='cc-name'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='cardNumber'
						name='cardNumber'
						value={cardNumber}
						onChange={onChange}
						label='Card number'
						fullWidth
						autoComplete='cc-number'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='expDate'
						name='expireDate'
						label='Expiry date'
						value={expireDate}
						onChange={onChange}
						fullWidth
						autoComplete='cc-exp'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id='cvv'
						label='CVV'
						name='cvv'
						value={cvv}
						onChange={onChange}
						helperText='Last three digits on signature strip'
						fullWidth
						autoComplete='cc-csc'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color='secondary' name='saveCard' value='yes' />}
						label='Remember credit card details for next time'
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
