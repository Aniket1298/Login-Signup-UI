import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class LoginForm extends Component {
    constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state={email:'',password:'',errors:""}
    }
    handleSubmit(event){
        this.setState({errors:this.state.email})
        fetch('http://localhost:4000/api/user/login',{
            method:"POST",
            body:{
                "name":this.state.email,
                "password":this.state.password
            }
        }).then(data =>  { 

            if(data){ //here!
                 redirect: window.location.replace("../Sample/home.html") 
            } else{
                alert("Invalid Email or Password");
            }
        }) 
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
       
            </MuiThemeProvider>
        
        </div>
        );
    }
    }
const style = {
 margin: 15,
};

export default LoginForm;