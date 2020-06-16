import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './profile.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import GridProfile from "./GridProfile"



class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      firstname: '',
      lastname: '',
      username: '',
      clickedAwake: '',
      clickedAsleep: '',
      bio: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

  } 
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    console.log('profile, handleSubmit, firstname:, lastname: , username: , clickedAwake: , clickedAsleep: , bio: ')
    console.log(this.state.username)
    event.preventDefault()

    axios.get('/user/', {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			username: this.state.username,
      clickedAwake: this.state.clickedAwake,
      clickedAsleep: this.state.clickedAsleep,
      bio: this.state.bio
		})  
  }



  render() {
    // if (this.state.loggedIn) {
    //   return (<Redirect to={{ pathname: '/profile' }
    // } />)
    // } 
    return (
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
       
        <h2>Welcome {this.state.firstname}</h2>
      </div>
    )
    
  }
    // return <Container>
    //           <GridProfile />
    //         </Container>
    

}

export default Profile