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
    this.state = {login:0,register:0,logcolor:"blue"};
    this.auth=this.auth.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }
  loginclick(event){
    this.setstate({login:1 ,register:0})
  }
  handleClick(event){
    if (event==="login"){this.setState({login:1,register:0});}
    else this.setState({login:0,register:1})
  }
  auth(){
    if (this.state.register===0){return <LoginForm/>}
    else {return <SignupForm/>}
  }
  render(){
    return(
      
    <div className="App">
    
      <MuiThemeProvider>
      <AppBar title="BlockHealth"/>
      <div className="row">
      
      <RaisedButton label="Login" primary={true} style={{margin:'2%'}} onClick={(event) => this.handleClick('login')}/>

      <RaisedButton  label="Signup" primary={true} style={{margin:'2%'}} onClick={(event)=>this.handleClick("signup")}/>
      </div>
      <this.auth/>
      </MuiThemeProvider>

    </div>
    );  
  }
}

export default App;
