import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import CreateRecord from './CreateRecord'
import Records from './Records'
import Nav from './Nav'

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/create" component={CreateRecord} />
          <Route path="/records" component={Records} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;