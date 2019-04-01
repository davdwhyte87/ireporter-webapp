import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import thunk from 'redux-thunk'
import Root from '../src/components/Root'
import Home from '../src/components/Home'
import userReducer from '../src/reducers/usersReducer'

const store = createStore(userReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Root>
              <Route exact path="/" component={Home}/>
            </Root>
          </Router>
        </div>
      </Provider>
  
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("index"))
