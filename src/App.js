import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Profile from "./components/profile";
import Footer from "./components/Footer";
import Asleep from "./components/Asleep";
import Awake from "./components/Awake";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

  render() {
    const appStyle = {
      // position: 'relative',
      // // top: '30%',
      // // left: '50%',
      marginTop: "90px",
      // // marginLeft: '-250px',
      // // marginBottom:'50px',
      // // paddingBottom:'50px'
    };
    return (
      <div style={appStyle} className="App">
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn && <h3 >Welcome, {this.state.username}!</h3>} */}
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() => <Signup />} />
        {/* Routes to different components */}
        <Route exact path="/Asleep" component={Asleep} />
        <Route exact path="/Awake" component={Awake} />
        <Footer />
      </div>
    );
  }
}

export default App;
