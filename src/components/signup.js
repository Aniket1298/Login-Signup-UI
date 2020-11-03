import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router';

import { ImageCropFree } from 'material-ui/svg-icons';

const axios = require('axios');
class SignupForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    this.state={name:'',email:'',password:'',errors:""}
        
    } 
    
    handleSubmit(event){
        const body ={"name":this.state.name,"email":this.state.email,"password":this.state.password}
        axios.post('http://localhost:4000/api/user/register',body).then(res => {
            if (res.data=="Created"){
                this.props.history.push('/login')}
            else{this.setState({errors:res.data})}
          })
    }
    render(){ 
        return (
        <div>
            <MuiThemeProvider>
            <div>
            <h1>SignUp</h1>
            <p style={{color:"red"}}>{this.state.errors}</p>
            <TextField
                hintText="Name"
                floatingLabelText="Name"
                onChange = {(event,newValue) => this.setState({name:newValue,errors:''})}
                />
            <br/>
            <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange = {(event,newValue) => this.setState({email:newValue,errors:''})}
                />
            <br/>
                <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue,errors:''})}
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

export default withRouter(SignupForm);