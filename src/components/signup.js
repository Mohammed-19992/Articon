import React, { Component } from 'react';
import './signup.css';


class About extends Component {
  render() {
    return(
      <div id="contactcard">
        <div id="contactform">
        <div id="firstbox">
        <h1 id="title">Sign Up</h1>
        <input id="text" type="text" name="name" placeholder="Name"/>
          <input id="text" type="email" name="email" placeholder="E-mail Address"/>
          <input id="text" type="password" name="message" placeholder="Password"/>        
        <br></br>
        <input id="submit" type="submit" name="submit-button" value="submit"/>
        </div>
        <div id="secondbox">
        <span class="signinwith">You can reach us<br/>on Social Network</span>
        <button id="facebook" href="https://www.facebook.com/Explorer-107453107788226" class="fa fa-facebook"></button>    
        <button id="twitter"href="https://twitter.com/ExplorerTravel6" class="fa fa-twitter"></button> 
        <button id="instagram"href="" class="fa fa-instagram"></button> 
            
        </div>

        </div>
        </div>
    )
    
  }
}

export default About;

