import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/homepage'
import LoginPage from './components/LoginPage'
import upload from './components/upload'
import Authentication from './components/Authentication'
const dotenv = require('dotenv')
dotenv.config()
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={App} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/upload" component={upload} />
      <Route exact path="/auth" component={Authentication} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
