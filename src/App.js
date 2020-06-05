import React, { Component } from 'react';
import axios from 'axios'
// import { Route } from 'react-router-dom'
import { Route } from "react-router-dom";
// import logo from "./babylogo.png";
import "./App.css";
// import Nav from "./components/Nav";
import Footer2 from "./components/Footer2";
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Profile from "./components/Profile";
import Navbar from './components/navbar';
import Home from './components/home';
import Awake from "./components/Awake"
import Asleep from "./components/Asleep"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          path="/home"
          render={() =>
            <Home/>}
        />    
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          path="/profile"
          render={() =>
            <Profile/>}
        />
        <Route
          path="/awake"
          render={() =>
            <Awake/>}
        />
        <Route
          path="/asleep"
          render={() =>
            <Asleep/>}
        />
        <Footer2 />
      </div>
    );
  }
}

export default App;
