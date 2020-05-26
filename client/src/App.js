import React, { Component } from "react";
import logo from "./babylogo.png";
import "./App.css";
import Nav from "./components/Nav";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer"
import Accordion from "./components/Accordion"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
        </div> */}
          <Nav />        
        <p className="App-intro">
          <Accordion/>
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
