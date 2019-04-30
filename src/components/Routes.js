import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import CreateRecord from './CreateRecord'

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/create" component={CreateRecord} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;