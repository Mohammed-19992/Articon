import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import './contest.css';



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* First Project */}
          
          <br></br>
          <br></br>
        </div>



      )
    }

  }


  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
