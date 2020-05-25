import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
// import logo from "./babylogo.png";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>

        <Footer />
      </Router>

      // <div className="App">
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //     <Nav />
      //   <p className="App-intro">
      //     <Accordion/>
      //   </p>
      //   <div>
      //   <Footer />
      //   </div>
      // </div>
    );
  }
}

export default App;
