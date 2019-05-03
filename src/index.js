import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Routes from '../src/components/Routes'
import indexReducer from '../src/reducers/index'
import Nav from './components/Nav'
import './assets/css/App.css'
import './assets/css/Style.css'

const store = createStore(indexReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route component={Nav} />
            <Route component={Routes} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("index"))
