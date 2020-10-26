import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class SignupForm extends Component {
    constructor(props){
        super(props);
    this.state={email:'',password:'',errors:""}
    } 
    handleClick(event){
        this.setState({errors:''})
    }
    render() {
        return (
        <div>
            <MuiThemeProvider>
            <div>
            <h1>SignUp</h1>
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
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </div>
            </MuiThemeProvider>
        </div>
        );
    }
    }
const style = {
 margin: 15,
};


export default SignupForm;