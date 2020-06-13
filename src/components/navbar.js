import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
// import { Route, Link } from 'react-router-dom'
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import logo from '../logo.svg';
import "../App.css";
import axios from "axios";
import './Navbar.css';


class Navbar extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    logout(event) {
        event.preventDefault();
        console.log("logging out");
        axios
            .post("/user/logout")
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: false,
                        username: null,
                    });
                }
            })
            .catch((error) => {
                console.log("Logout error");
            });
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log("navbar render, props: ");
        console.log(this.props);

        return (
            <div>
                <AppBar>
                    <Toolbar className="navbar">
                        <div className="happy-nappers-div">
                            {/* <div className="happy-nappers-div" id="top-filler"> */}
                            
                            <Link to="/">
                                <span className="happy-nappers-link">happy nappers</span>
                            </Link>
                            {/* </div> */}
                            {/* <img src={logo} className="App-logo" alt="logo" /> */}
                            {/* <h1 className="App-title">Happy Nappers</h1> */}
                        </div>
                        <div>
                            {loggedIn ? (
                                <section className="navbar-section">
                
                                    {/* <Link to="/" className="btn btn-link text-secondary">
                                        {/* <span style={{ color: "#405433" }} className="text">
                                            happy nappers
                                        </span> */}
                                    {/* </Link> */} 
                                    <Link
                                        to="#"
                                        className="btn btn-link text-secondary"
                                        onClick={this.logout}
                                    >
                                        <span className="text" style={{ color: "#405433" }}>
                                            logout
                                        </span>
                                    </Link>
                                    <Link
                                        to="/profile"
                                        className="btn btn-link"
                                        align-items="right"
                                    >
                                        <span className="text" style={{ color: "#405433" }}>
                                            profile
                                        </span>
                                    </Link>
                                </section>
                            ) : (
                                    <section className="navbar-section">
                                        <Link to="/login" className="btn btn-link text-secondary">
                                            <span className="text" style={{ color: "#405433" }}>
                                                login
                                            </span>
                                        </Link>
                                        <Link to="/signup" className="btn btn-link">
                                            <span className="text" style={{ color: "#405433" }}>
                                                sign up
                                            </span>
                                        </Link>
                                    </section>
                                )}
                        </div>
                        
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;

                                