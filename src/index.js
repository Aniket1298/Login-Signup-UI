import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LoginForm from './components/login.js';
import SignupForm from './components/signup';
import {Test,X,Y} from './components/test';
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/test" component={Test} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
