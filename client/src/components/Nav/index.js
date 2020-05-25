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
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <nav> */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            <Link variant="button" color="inherit" href="/login" className={classes.link}>
							Login
							</Link>
							<Link variant="button" color="inherit" href="/signup" className={classes.link}>
							Signup
							</Link>
							
							<Link variant="button" color="inherit" href="/home" className={classes.link}>
							Home
							</Link>
          </IconButton>
          {/* </nav> */}
          <Typography variant="h6" className={classes.title}>
            happy nappers
          </Typography>
            {/* <nav> */}
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                color="inherit"
              >
                 <AccountCircle />
                 <Link variant="button" color="inherit" href="/profile" className={classes.link}>
							Profile
							</Link>
              </IconButton>
              {/* </nav> */}
          {/* {auth && (
            <div>
              <Router>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                color="inherit"
              >

              <Link component={RouterLink} to={Profile} onClick={preventDefault}>
  </Link>
          

                <AccountCircle />
              </IconButton>
              </Router>
            
            </div> */}
          {/* )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

