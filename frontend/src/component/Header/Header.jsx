import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useSelector, useDispatch } from 'react-redux';
// import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './header.styles';
import { user_logout } from '../../features/userSlice';
import { IconButton, Typography } from '@material-ui/core';
const Header = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [anchor, setAnchor] = React.useState(null);
	const handleLoginClick = (event) => {
		setAnchor(event.currentTarget);
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const isUserLogin = Boolean(useSelector((state) => state.userLogin.user[0]));

	const name = useSelector((state) =>
		isUserLogin ? state.userLogin.user[0].name : '',
	);
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleloginClose = () => {
		setAnchor(null);
	};
	// const theme = useTheme();
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Button component={Link} to='/' className={classes.title}>
						proshop
					</Button>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search…'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.sectionDesktop}>
						<Button
							component={Link}
							to='/cart'
							className={classes.button}
							startIcon={<ShoppingCartIcon />}>
							cart
						</Button>
						{isUserLogin ? (
							<div>
								<Button
									endIcon={<ArrowDropDownIcon />}
									className={classes.button}
									aria-controls='login-menu'
									aria-haspopup='true'
									onClick={handleLoginClick}>
									{name}
								</Button>
								<Menu
									id='login-menu'
									anchorEl={anchor}
									keepMounted
									open={Boolean(anchor)}
									getContentAnchorEl={null}
									anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
									transformOrigin={{ vertical: 'top', horizontal: 'center' }}
									onClose={handleloginClose}>
									<MenuItem onClick={handleloginClose}>
										<ListItemIcon>
											<AccountCircleIcon />
										</ListItemIcon>
										<Typography variant='body1'>Profile</Typography>
									</MenuItem>

									<MenuItem
										onClick={() => {
											dispatch(user_logout());
											handleloginClose();
										}}>
										<ListItemIcon>
											<ExitToAppIcon />
										</ListItemIcon>
										<Typography variant='body1'>Log out</Typography>
									</MenuItem>
								</Menu>
							</div>
						) : (
							<Button
								component={Link}
								to='/login'
								className={classes.button}
								startIcon={<PersonIcon />}>
								sign in
							</Button>
						)}
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={handleClick}>
							<MoreIcon className={classes.moreIcon} />
						</IconButton>
						{isUserLogin ? (
							<Menu
								classes={{ paper: classes.paper }}
								id='simple-menu'
								anchorEl={anchorEl}
								keepMounted
								getContentAnchorEl={null}
								anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
								transformOrigin={{ vertical: 'top', horizontal: 'center' }}
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>
									<Button
										component={Link}
										to='/cart'
										className={classes.button}
										startIcon={<ShoppingCartIcon />}>
										cart
									</Button>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Button
										component={Link}
										to='/login'
										className={classes.button}
										startIcon={<PersonIcon />}>
										profile
									</Button>
								</MenuItem>
								<MenuItem
									onClick={() => {
										dispatch(user_logout());
										handleClose();
									}}>
									<Button
										component={Link}
										to='/login'
										className={classes.button}
										startIcon={<ExitToAppIcon />}>
										sign out
									</Button>
								</MenuItem>
							</Menu>
						) : (
							<Menu
								classes={{ paper: classes.paper }}
								id='simple-menu'
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>
									<Button
										component={Link}
										to='/cart'
										className={classes.button}
										startIcon={<ShoppingCartIcon />}>
										cart
									</Button>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Button
										component={Link}
										to='/login'
										className={classes.button}
										startIcon={<PersonIcon />}>
										sign in
									</Button>
								</MenuItem>
							</Menu>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
