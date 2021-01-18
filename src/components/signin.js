// Importing libraries

import React, { Component } from 'react';
import './signin.css';

class resume extends Component {
  render() {
    return(
      <div id="card1">
        <div id="card2">
        <div>
        <h1 id="sign">Sign In</h1>
          <input id="email" type="email" name="email" placeholder="E-mail Address"/>
          <input id="email" type="password" name="message" placeholder="Password"/>        
        <br></br>
        <input id="sum" type="submit" name="submit-button" value="Log In"/>
        </div>
        </div>
        </div>
    )
    
  }
}

export default resume;
