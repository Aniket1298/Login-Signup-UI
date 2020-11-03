import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';


const axios = require('axios');

class LoginForm extends Component {
    constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state={email:'',password:'',errors:'',loginstate:false}
    }
    handleSubmit(event){
        axios.post('http://localhost:4000/api/user/login',{
            "email":this.state.email,
            "password":this.state.password
        }).then(res => {
            alert("Hello")
            if (res.status==400){this.setState({ errors:res.data });}
            else{localStorage.setItem('token',res.data.token)
            //alert(localStorage.getItem('token'))  
            this.props.history.push('/upload')}
          }).catch(error=>{
          
            this.setState({ errors:'Invalid Credentials' })
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
                onChange = {(event,newValue) => this.setState({email:newValue})}
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
            <p style={{color:"red"}}> {this.state.errors}</p>
            </MuiThemeProvider>
        
        </div>
        );
    }
    }
const style = {
 margin: 15,
};
export default withRouter(LoginForm);