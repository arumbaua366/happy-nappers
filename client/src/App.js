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
