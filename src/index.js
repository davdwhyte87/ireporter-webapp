import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Root from '../src/components/Root'
import Home from '../src/components/Home'


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Root>
            <Route exact path="/" component={Home}/>
          </Root>
        </Router>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("index"))
