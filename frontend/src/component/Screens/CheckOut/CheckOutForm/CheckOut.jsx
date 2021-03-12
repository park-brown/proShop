import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import Review from '../Review/Review';
import { useDispatch, useSelector } from 'react-redux';
import {
	cart_save_shipping_address,
	cart_save_payment_details,
} from '../../../../features/cartSlice';
const useStyles = makeStyles((theme) => ({
	main: {
		marginBottom: theme.spacing(4),
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
		color: `${theme.palette.common.white}`,
		backgroundColor: '#1976d2',
		'&:hover': {
			backgroundColor: `${theme.palette.primary.main}`,
		},
	},
}));

export default function Checkout({ history }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userLogin.user);

	const loginUserName = user[0].name;
	const first_name = loginUserName.split(' ')[0];
	const last_name = loginUserName.split(' ')[1];

	const isUserSignIn = Boolean(user.length);

	const [activeStep, setActiveStep] = React.useState(0);

	React.useEffect(() => {
		if (!isUserSignIn) {
			history.push('/');
		}
	});

	const steps = ['Shipping address', 'Payment details', 'Review your order'];

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <AddressForm onChange={handleChange} value={value} />;
			case 1:
				return (
					<PaymentForm value={payment_details} onChange={handlePaymentChange} />
				);
			case 2:
				return <Review />;
			default:
				throw new Error('Unknown step');
		}
	};

	/*keep track of the values of address form */

	const [value, setVaule] = React.useState({
		firstName: first_name,
		lastName: last_name,
		address1: '',
		address2: '',
		city: '',
		state: '',
		zip: '',
		country: '',
	});

	const handleChange = (event) => {
		setVaule({
			...value,
			[event.target.name]: event.target.value,
		});
	};
	/* keep  track of payment form */

	const [payment_details, setPaymentDetails] = React.useState({
		cardName: '',
		cardNumber: null,
		expireDate: '',
		cvv: '',
	});
	const handlePaymentChange = (event) => {
		setPaymentDetails({
			...payment_details,
			[event.target.name]: event.target.value,
		});
	};

	const handleNext = () => {
		setActiveStep(activeStep + 1);

		switch (activeStep) {
			case 0:
				dispatch(cart_save_shipping_address(value));
				break;
			case 1:
				dispatch(cart_save_payment_details(payment_details));
				break;
			case 2:
				break;
			default:
				return;
		}
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<Container component='main' className={classes.main} maxWidth='sm'>
				<Paper className={classes.paper} variant='outlined'>
					<Typography component='h1' variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{/*On Third STEP FINISHED, SHOW CONFIRMATION */}
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant='h5' gutterBottom>
									Thank you for your order.
								</Typography>
								<Typography variant='subtitle1'>
									Your order number is #2001539. We have emailed your order
									confirmation, and will send you an update when your order has
									shipped.
								</Typography>
							</React.Fragment>
						) : (
							<React.Fragment>
								{/*Swith Between different views */}
								{getStepContent(activeStep)}
								<div className={classes.buttons}>
									{/*After Next Button First CLick, Show Back Button */}
									{activeStep !== 0 && (
										<Button onClick={handleBack} className={classes.button}>
											Back
										</Button>
									)}

									<Button
										variant='contained'
										onClick={handleNext}
										className={classes.button}>
										{activeStep === steps.length - 1 ? 'Place order' : 'Next'}
									</Button>
								</div>
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
			</Container>
		</React.Fragment>
	);
}
