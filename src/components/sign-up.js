import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// function Copyright() {
// 	return (
// 	  <Typography variant="body2" color="textSecondary" align="center">
// 		{'Copyright © '}
// 		<Link color="inherit" href="https://material-ui.com/">
// 		  Your Website
// 		</Link>{' '}
// 		{new Date().getFullYear()}
// 		{'.'}
// 	  </Typography>
// 	);
//   }

//   const useStyles = makeStyles((theme) => ({
// 	paper: {
// 	  marginTop: theme.spacing(8),
// 	  display: 'flex',
// 	  flexDirection: 'column',
// 	  alignItems: 'center',
// 	},
// 	avatar: {
// 	  margin: theme.spacing(1),
// 	  backgroundColor: theme.palette.secondary.main,
// 	},
// 	form: {
// 	  width: '100%', // Fix IE 11 issue.
// 	  marginTop: theme.spacing(3),
// 	},
// 	submit: {
// 	  margin: theme.spacing(3, 0, 2),
// 	},
//   }));

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	// const classes = useStyles();
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: '/login' }} />
	} else {
	return (
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div>
		<Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
			<form className="form-horizontal">
			<Grid item xs={12}>
				<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
				</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
			</Grid>
			<Grid item xs={12}>
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</Grid>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						fullWidth
						variant="contained"
						color="primary"
						// className={classes.submit}
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
	  )
    }
  }
}

export default Signup