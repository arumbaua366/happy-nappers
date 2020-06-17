import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
    render() {

      return(
      <div>  
      <h2>Welcome, {this.props.username}!</h2>
      <img src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80" alt="Avatar" id="avatar" style={{verticalAlign: "middle", width: "200px", height: "200px", borderRadius: "50%", padding: "30px" }}></img>
              <h2>{this.props.firstname}<span> </span>{this.props.lastname}</h2>
              <h3><i>Sacramento, CA</i></h3> 
              <p>Bio: </p>
              <p>Play Mode Used: {this.props.clickedAwake}</p>
              <p>Sleep Mode Used: {this.props.clickedAsleep}</p>
              <br></br>
              <p><i>member since: 2020</i></p>
      </div>
      )
    }
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: true,
//       username: '',
//       awakeCount: 0,
//       asleepCount: 0
//     };
//   }

//   updateCount() {
//     this.setState((prevState, props) => {
//       return { count: prevState.count + 1 }
//     });
//   }

//   render() {
//     return (
//             <button
//               onClick={() => this.updateCount()}
//             >
//               Clicked {this.state.count} times
//             </button>
//             )
//   }
}

export default Profile