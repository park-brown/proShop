import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	getUserProfile,
	updateUserProfile,
} from '../../../features/userUpdateSlice';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useStyles } from './Profile.styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const ProfileScreen = ({ history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const Login_user = useSelector((state) => state.userLogin);
	const { status, error } = useSelector((state) => state.userUpdateProfile);

	const { user } = Login_user;

	const isUserExist = Boolean(user.length);

	const [name, setName] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateUserProfile({
				id: user[0].id,
				name: name,
				email: email,
				password: password,
			}),
		);
		setName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		if (status === 'succeeded') {
			history.push('/');
		}
	};

	useEffect(() => {
		if (!isUserExist) {
			history.push('/login');
		} else {
			if (!user[0].name) {
				dispatch(getUserProfile({ id: 'profile' }));
			} else {
				setName(user[0].name);
				setEmail(user[0].email);
			}
		}
	}, [isUserExist, dispatch]);

	return (
		<Container maxWidth='sm' className={classes.container} component='main'>
			<Paper className={classes.paper} elevation={4}>
				<Grid container spacing={6} className={classes.gridContainer}>
					<Grid item className={classes.firstGrid}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							profile
						</Typography>
					</Grid>
					{/* name section */}
					<Grid item>
						<TextField
							required
							variant='outlined'
							label='name'
							type='text'
							id='name'
							value={name}
							onChange={handleName}
							className={classes.email}
							autoComplete='name'
							autoFocus
						/>
					</Grid>
					{/*email section */}
					<Grid item>
						<TextField
							error={error ? true : null}
							helperText={error ? 'invalid email' : null}
							required
							variant='outlined'
							label='email address'
							type='email'
							id='email'
							value={email}
							onChange={handleEmail}
							className={classes.email}
							autoComplete='email'
							autoFocus
						/>
					</Grid>
					{/* PASSWORD SECTION */}
					<Grid item>
						<TextField
							required
							error={error ? true : null}
							helperText={error ? 'invalid password' : null}
							type={showPassword ? 'text' : 'password'}
							name='password'
							id='password'
							value={password}
							onChange={handlePassword}
							variant='outlined'
							label='password'
							autoComplete='current-password'
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge='end'>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					{/* confirm password section   */}
					<Grid item>
						<TextField
							required
							error={error ? true : null}
							helperText={error ? 'invalid password' : null}
							type={showPassword ? 'text' : 'password'}
							name='confirm_password'
							id='confirm_password'
							value={confirmPassword}
							onChange={handleConfirmPassword}
							variant='outlined'
							label='password'
							autoComplete='current-password'
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge='end'>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					{/* SIGN UP SECTION */}
					<Grid item>
						<Button
							onClick={submitHandler}
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.signInButton}>
							update
						</Button>
					</Grid>
					<Grid item>
						<Typography
							variant='body2'
							component={Link}
							to={'/'}
							className={classes.signUpLink}>
							{'ready to go !'}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default ProfileScreen;
