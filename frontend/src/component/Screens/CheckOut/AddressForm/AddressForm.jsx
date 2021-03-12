import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm({ onChange, value }) {
	const {
		firstName,
		lastName,
		address1,
		address2,
		city,
		state,
		zip,
		country,
	} = value;
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='firstName'
						name='firstName'
						label='First name'
						fullWidth
						InputLabelProps={{ shrink: true }}
						value={firstName}
						onChange={onChange}
						autoComplete='given-name'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='lastName'
						name='lastName'
						label='Last name'
						value={lastName}
						fullWidth
						InputLabelProps={{ shrink: true }}
						onChange={onChange}
						autoComplete='family-name'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id='address1'
						name='address1'
						label='Address line 1'
						fullWidth
						value={address1}
						onChange={onChange}
						autoComplete='shipping address-line1'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id='address2'
						name='address2'
						label='Address line 2'
						fullWidth
						value={address2}
						onChange={onChange}
						autoComplete='shipping address-line2'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='city'
						name='city'
						label='City'
						fullWidth
						value={city}
						onChange={onChange}
						autoComplete='shipping address-level2'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id='state'
						name='state'
						label='State/Province/Region'
						fullWidth
						value={state}
						onChange={onChange}
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='zip'
						name='zip'
						label='Zip / Postal code'
						fullWidth
						value={zip}
						onChange={onChange}
						autoComplete='shipping postal-code'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='country'
						name='country'
						label='Country'
						fullWidth
						value={country}
						onChange={onChange}
						autoComplete='shipping country'
						variant='standard'
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox color='secondary' name='saveAddress' value='yes' />
						}
						label='Use this address for payment details'
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
