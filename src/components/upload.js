import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router';
import classes from 'material-ui/styles/MuiThemeProvider'
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';

class Upload extends Component {
    constructor(props){
        super(props)

        this.state = { 
            patient_id:null,
            selectedFile: null
          };
          this.onFileChange=this.onFileChange.bind(this)
        }
        onFileChange = event => { 
            this.setState({ selectedFile: event.target.files[0] }); 
          }; 

    
    uploadform(){
    }
    render(){
        return(
            <div className="upload-form" style={{textAlign:"center"}}>
                <MuiThemeProvider>
                    <AppBar title="BlockHealth"/>
                    <h2>Upload Report</h2>
                    <TextField
                    hintText="Patient ID"
                    floatingLabelText="Patient ID"
                    onChange = {(event,newValue) => this.setState({patient_id:newValue})}
                    />
                    <br/>
                    <br/>
                    <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <RaisedButton onClick={this.onFileUpload}> 
                  Upload!
                </RaisedButton> 
                </div> 
                    <TextField
                        name="upload-photo"
                        type="file"
                        hintText="Report"
                        floatingLabelText="Report"
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