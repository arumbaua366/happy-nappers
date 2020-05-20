import React, { Component } from "react";
import logo from "./babylogo.png";
import "./App.css";
import Nav from "./components/Nav";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Happy Nappers
          <Nav />
          </h2>
          
        </div>
        <p className="App-intro">
          <Buttons />
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
