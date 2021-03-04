import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
// import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './header.styles';
import { IconButton } from '@material-ui/core';
const Header = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
						<Button
							component={Link}
							to='/login'
							className={classes.button}
							startIcon={<PersonIcon />}>
							sign in
						</Button>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={handleClick}>
							<MoreIcon className={classes.moreIcon} />
						</IconButton>
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
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
