import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/homepage'
const dotenv = require('dotenv')
dotenv.config()
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={HomePage} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
