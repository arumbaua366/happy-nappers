import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./babylogo.png";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home"
import Awake from "./pages/Awake"
import Asleep from "./pages/Asleep"

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/asleep" component={Asleep} />
          <Route exact path="/awake" component={Awake} />
        </Switch>
    
        <Footer />
      </Router>


    );
  }
}

export default App;
