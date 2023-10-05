import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import LoginForm from './component/LoginForm'
import NotFound from './component/NotFound'
import Home from './component/Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ebank/login" component={LoginForm} />
        <Route path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
    )
  }
}

export default App
