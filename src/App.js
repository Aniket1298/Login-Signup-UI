import React ,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import SignupForm from './components/signup';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {login:0,register:0};
    this.loginclick= this.loginclick.bind(this)
    this.signupclick=this.signupclick.bind(this)
    //this.auth=this.auth.bind(this)
  }
  loginclick(event){
    
    this.state.login=1;this.state.register=0;


  }
  signupclick(event){this.state.register=1;this.state.login=1;}
  handleClick(event){
    if (event.target.label="Login"){return <SignupForm/>}
    return <SignupForm/>
  }
  auth(){
    
    if (this.state.login){return <LoginForm/>}
    else {return <SignupForm/>}
  }
  render(){
    const log=this.state.login;
    return(
    <div className="App">

      <MuiThemeProvider>
        {log?LoginForm:SignupForm}
      <AppBar title="BlockHealth"/>
      <div className="row">
      <RaisedButton label="Login" primary={true} style={{margin:'2%'}} onClick={(event) => this.loginclick(event)}/>
  
      <RaisedButton label="Signup" primary={true} style={{margin:'2%'}} onClick={(event) => this.signupclick(event)}/>
      </div>
    {this.state.login}   ABCD {this.state.register}
      {this.auth()}
      </MuiThemeProvider>

    </div>
    );  
  }
}

export default App;
