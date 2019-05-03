import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import CreateRecord from './CreateRecord'
import Records from './Records'
import Nav from './Nav'
import { connect } from 'react-redux'
import SingleRecord from './SingleRecord'
import RequireAuth from './AuthWrapper'


const Routes = (props) => {
  let isAuth
  const user = JSON.parse(localStorage.getItem('user'));
  if(user) {
    isAuth = true
  } else {
    isAuth = false
  }
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <RequireAuth path="/create" component={CreateRecord} auth={isAuth} />
        <RequireAuth path="/records" component={Records} exact  auth={isAuth} />
        <RequireAuth path="/record/:id" component={SingleRecord} auth={isAuth} />
        <RequireAuth path="/nec" component={Home} auth={isAuth} />
      </Switch>
  );
}

const mapStateToProps = state => ({
 
});
export default connect(() => mapStateToProps, {})(Routes);