import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import thunk from 'redux-thunk'
import Root from '../src/components/Root'
import Routes from '../src/components/Routes'
import Home from '../src/components/Home'
import Signup from '../src/components/Signup'
import userReducer from '../src/reducers/usersReducer'

const store = createStore(userReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("index"))
