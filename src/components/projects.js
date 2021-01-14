////////////////////////////////////////////////////////////////////////
////////////// This will be the page for ContentScript.js //////////////
////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';
import BannerLandscape from "../components/img/contest-card-banner-landscape.png";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* ////////// This is where the body of the Contest goes ////////// */}

          {/* ////////// Contest Card 1 starts ////////// */}

          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle style={{
              color: '#fff', height: '176px',
              background: `url(${BannerLandscape}) center / cover`
            }}
            >Latest Assignment: Landscape Photography</CardTitle>

            {/* FILE UPLOAD component from MDB-react starts
              see https://mdbootstrap.com/docs/react/forms/file-input/ */}

            <MDBContainer>
              <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="10">

                  <CardText>
                    <h5>TAKE PART & WIN $100 CASH</h5>
                    <h6>The winning picture as well as the top finalists will be published in Articon Magazine
                and will be shared to over 10,000 social media followers.</h6>
                    <li>Entries close on 31 January 2021 at 23:59 GMT</li>
                    <li>Member can upload 1 picture per assignment</li>
                    <li>You cannot upload the same picture in more than one assignment</li>
                  </CardText>

                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                      </span>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      />
                      <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
                      </label>
                    </div>
                  </div>

                  {/* this is for the extra spacing */}
                  <CardText></CardText>

                </MDBCol>
                <MDBCol md="1"></MDBCol>
              </MDBRow>
            </MDBContainer>

            {/* {/* FILE UPLOAD component from MDB-react ends*/}

            <CardActions border></CardActions>
          </Card>

          {/* ////////// Contest Card 1 ends ////////// */}

          {/* ////////// This is where the body of the Contest ends ////////// */}
        </div >
      )
    }

  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Opening Contest</Tab>
          <Tab>Past Contests</Tab>
        </Tabs>

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
