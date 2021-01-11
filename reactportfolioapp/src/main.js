import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './compenent/pages/aboutme';
import Contact from './compenent/pages/contact';
import Projects from './compenent/pages/projects';



const Main = () => (
  <Switch>
    <Route path="./pages/aboutme" component={AboutMe} />
    <Route path="./pages/contact" component={Contact} />
    <Route path="./pages/projects" component={Projects} />
  </Switch>
)

export default Main;