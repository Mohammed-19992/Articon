import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './landingpage.css';
import art from './art.png';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', Height: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img id="img" src={art} alt="art"/>

            
            <div className="banner-text">
              <h1 id="con"><a id="A">A<a id="r">r</a><a id="t">t</a><a id="i">i</a></a>con</h1>

            <hr/>

          <p>A place to support artists who lack support. Our support is artistically</p>
          <p>Dates/Times for the next contest will be posted here</p>
          <a>Next contest will run from February 5th to February 11th at 12:00 AM</a>
          <br></br>
          <br></br>
          
           

        <div className="social-links">

          {/* instagram */}
          <a href="" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* YouTube */}
          <a href="" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
