import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Routes from '../src/components/Routes'
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
