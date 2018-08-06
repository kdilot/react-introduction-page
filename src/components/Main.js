import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landingpage, Project, Resume, Preview } from 'components';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/project" component={Project} />
    <Route path="/resume" component={Resume} />
    <Route path="/preview" component={Preview} />
  </Switch>
);

export default Main;