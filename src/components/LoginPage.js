import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import LoginForm from './login'

const axios = require('axios');
class LoginPage extends Component{
    render(){
        return (
            <div className="loginpage" style={{textAlign:"center"}}>
            <MuiThemeProvider>
            <AppBar title="BlockHealth"/>
            <LoginForm/>
            </MuiThemeProvider>
            </div>
        );
    }
}

export default withRouter(LoginPage);