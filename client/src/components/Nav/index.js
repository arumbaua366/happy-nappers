import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';
// import { MemoryRouter as Router } from 'react-router';
// import { Link } from 'react-router-dom';
// import Profile from '../../pages/Profile'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LinkLogin from "../LinkLogin"
import LinkSignup from "../LinkSignup"
import LinkProfile from "../LinkProfile"
import LinkHome from "../LinkHome"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
// const preventDefault = (event) => event.preventDefault();

 
export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <LinkHome />
        <Typography variant="h6" className={classes.title}>
          {/* leave this typography here for alignment */}
        </Typography>
        {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <LinkProfile />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LinkLogin />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LinkSignup />
                </MenuItem>
              </Menu>
            </div>
          )}
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircle />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
  

