import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Buttons from "./components/Buttons";

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
      </div>
    );
  }
}

export default App;
