import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Articon</Link>} scroll>
            <Navigation>
            <Link to="/contest">Contest</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Log In</Link>
                <Link to="/contact">About Us</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Articon</Link>}>
            <Navigation>
            <Link to="/contest">Contest</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Log In</Link>
            <Link to="/contact">About Us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
