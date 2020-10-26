import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const axios = require('axios');

class LoginForm extends Component {
    constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state={email:'',password:'',errors:""}
    }
    handleSubmit(event){
        axios.post('http://localhost:4000/api/user/login',{
            "email":this.state.email,
            "password":this.state.password
        });
    }
    render() {
        return (
        <div>
            <MuiThemeProvider>
            <div>
            
            <h1>Login</h1>
            <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange = {(event,newValue) => this.setState({email:newValue,errors:newValue})}
                />
            <br/>
                <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
            </div>
            <p>{this.errors}</p>
            </MuiThemeProvider>
        
        </div>
        );
    }
    }
const style = {
 margin: 15,
};

export default LoginForm;