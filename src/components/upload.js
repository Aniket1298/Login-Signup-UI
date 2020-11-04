import React ,{Component} from 'react';
import User from './utils'
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router';
import classes from 'material-ui/styles/MuiThemeProvider'
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Toolbar,Button,Typography,IconButton } from '@material-ui/core';
import { ThreeSixty } from '@material-ui/icons';

const jwt=require('jsonwebtoken')
class Upload extends Component {
    constructor(props){
        super(props)
        this.onFileChange = this.onFileChange.bind(this)
        const token = localStorage.getItem('token')
        this.state = { 
            patient_id:null,
            selectedFile: null,
            report_name:'',
          }
          this.user = ""
          try {

            const User = jwt.verify(token,'ABC123').user
            this.user= User
        }
        catch(err){
            this.props.history.push('/home')
        } 
          this.onFileChange=this.onFileChange.bind(this)
          }
        onFileChange = event => { 
            this.setState({ selectedFile: event.target.files[0] }); 
          }; 
    
    handleHome(){
        this.props.history.push('/home')
    }
    onFileUpload = () => { 
     
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append('name',this.user.name+'_'+this.state.patient_id+Date())
        formData.append('file',this.state.selectedFile)
        formData.append('report_name',this.state.report_name)
        formData.append('patient_id',this.state.patient_id)
        console.log(this.state.selectedFile); 
        alert(formData)
        //axios.post("api/uploadfile", formData); 
      }
    handleLogout(){
        localStorage.setItem('token','')
        this.props.history.push('/home')
    }
    uploadform(){
    }
    
    render(){
        return(
            <div className="upload-form" style={{textAlign:"center"}}>
                
                <MuiThemeProvider>
                    
                    <AppBar position="static" >
                        <Toolbar>
                        <Button onClick={() => this.handleLogout() } color="inherit">Logout</Button>
                        <Button onClick={() => this.handleHome() } color="green" style={{textDecorationColor:"white"}}>Home</Button>
                        </Toolbar>
                    </AppBar>
                    <p style={{color:"sandybrown",fontSize:"200%",fontFamily:"cursive",fontWeight:"bolder"}}>Welcome {this.user.name}</p>
                    <h2>Upload Report</h2>
                   {process.env.SECRET_KEY}
                    <TextField
                    hintText="Patient ID"
                    floatingLabelText="Patient ID"
                    onChange = {(event,newValue) => this.setState({patient_id:newValue})}
                    />
                    <br/>
                    <br/>
                    <TextField
                    hintText="Report Name"
                    floatingLabelText="Report Name"
                    onChange = {(event,newValue) => this.setState({report_name:newValue})}
                    />
                    <br/>
                    <br/>
                    <div> 
                </div> 
                    <TextField
                        name="upload-photo"
                        type="file"
                        hintText="Report"
                        floatingLabelText="Report"
                        onChange = {this.onFileChange}
                        />
                    <br/>
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>

                </MuiThemeProvider>
            </div>
        );
    }
}



const style = {
    margin: 15,
   };
   export default withRouter(Upload);