import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Signup from './signup';
import Contact from './contact';
import Contest from './contest';
import Signin from './signin';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/signup" component={Signup} />
    <Route path="/contact" component={Contact} />
    <Route path="/contest" component={Contest} />
    <Route path="/signin" component={Signin} />
  </Switch>
)

export default Main;
