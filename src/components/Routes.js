import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import CreateRecord from './CreateRecord'
import Records from './Records'
import Nav from './Nav'
import { connect } from 'react-redux';

const Routes = (props) => {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/create" component={CreateRecord} />
          <Route path="/records" component={Records} />
        </Switch>
      </div>
  );
}

const mapStateToProps = state => ({
 
});
export default connect(() => mapStateToProps, {})(Routes);