import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class LoginForm extends Component {
    constructor(props){
    super(props);
    this.state={email:'',password:'',errors:""}
    }
    handleClick(event){
        this.setState({errors:this.state.email})
    }
    render() {
        return (
        <div>
            <MuiThemeProvider>
            <div>
            
            <h1>Login</h1>

            <h4> {this.state.errors} HEllo</h4>
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

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {value: '',email:'',password:'',errors:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value,email:event.target.email,password:event.target.password});
      }
    
      handleSubmit(event) {
          alert(this.state.email+" + "+ this.state.password)
        event.preventDefault();
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            
            <label>
              Email:
              <input type="text" value={this.state.email} onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input type="text" value={this.state.password} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default LoginForm;