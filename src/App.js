import React ,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Toolbar,Button,Typography,IconButton } from '@material-ui/core';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SignupForm from './components/signup';

class App extends Component{
  constructor(props) {
    super(props);
    this.handleAuth=this.handleAuth.bind(this)
    this.handleHome=this.handleHome.bind(this)

  }
  
  handleAuth(){
    this.props.history.push('/auth')
  }
  handleHome(){
    this.props.history.push('/home')
  }
  render(){
    return(
    <div className="App">
      <MuiThemeProvider>
      <AppBar position="static">
        <Toolbar>
          
          <Button onClick={() => this.handleAuth() } color="inherit">Login/Signup</Button>
          <Button onClick={() => this.handleHome() } color="green" style={{textDecorationColor:"white"}}>Home</Button>
        </Toolbar>
      </AppBar>
      <h2 style={{color:"indianred",fontFamily:"fantasy",fontSize:"40px"}}> Healthblock - Securing HealthCare Data</h2>
         <div className="row">
      </div>
      </MuiThemeProvider>
    </div>
    );  
  }
}

export default withRouter(App);
