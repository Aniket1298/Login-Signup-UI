import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/homepage'
import LoginPage from './components/LoginPage'
import upload from './components/upload'
const dotenv = require('dotenv')
dotenv.config()
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/upload" component={upload} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
