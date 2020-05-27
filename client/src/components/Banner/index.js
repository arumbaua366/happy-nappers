import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Jane Doe </h1>
                    <p></p>
                    
            </section>
        )
    }
}

export default Banner