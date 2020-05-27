import React, { Component } from "react";
import logo from "./babylogo.png";
import "./App.css";
import Nav from "./components/Nav";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer"
import Accordion from "./components/Accordion"
// Profile Page Imports
import NavProfile from "./components/NavProfile"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
        </div> */}
        {/* Main Page  */}
          {/* <Nav />        
        <p className="App-intro">
          <Accordion/>
        </p>
        <Footer /> */}
        {/* Main Page  */}
        {/* Profile Page */}
        <NavProfile />
        {/* Profile Page */}
      </div>
    );
  }
}

export default App;
