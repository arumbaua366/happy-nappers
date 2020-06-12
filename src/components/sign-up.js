import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import Logo from "./Logo"
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

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
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: '/login' }} />
	} else {
	const signupStyle = {
		position: 'relative',
		top: '50%',
	}	
	return (
		<div style={signupStyle} className="signup-form">
			<div className="signup-header">
				<Logo />
				<br></br>
				<br></br>
				<br></br>
				<h4 className="col-12">Sign up for your happy nappers account</h4>
			</div>
			<br></br>
			<form className="">
				<div className="form-group">
					<div>
						<label className="form-label" htmlFor="username">enter a username</label>
					</div>
					<div>
						<input className="username-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div>
						<label className="form-label" htmlFor="password">enter a password: </label>
					</div>
					<div>
						<input className="password-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-6"></div>
					<button
						className="btn btn-primary col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)
}
}
}
export default Signup
