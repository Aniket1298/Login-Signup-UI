import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const jwt = require('jsonwebtoken')
const axios = require('axios');

export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={user:null,patient_id:"",report_id:'',user_id:null}
        this.setState({user_id:jwt.verify(localStorage.getItem('token'),'ABC123')._id})
        this.fileInput = React.createRef();
    }
    componentDidMount(){
        fetch('http://localhost:4000/api/user/detail').then((res)=>{
            this.setState({user:res.data})
        })
    }
    render(){
        return (
            <div className="Transaction" style={{}} >
                <MuiThemeProvider>  
                <AppBar title="BlockHealth"/>
                {this.state.user_id}
                <h1 style={{color:"rosybrown",'margin-left':'37%'}}> Upload Medical Report</h1>    
                <div class="Transaction-form" style={{'margin-left':"35%"}}>
                <div className="transaction-form" style={{borderRadius:'5%',padding:'5%',width:"40%",border:"2px solid grey"}}>
                    <TextField
                        hintText="Patient ID"
                        floatingLabelText="Patient Name"
                        onChange = {(event,newValue) => this.setState({patient_id:newValue})}
                        />
                <br/>
                <br />
                <TextField
                        hintText="Report ID"
                        floatingLabelText="Report ID"
                        onChange = {(event,newValue) => this.setState({report_id:newValue})}
                        />
                <br/>                
                <p>Upload File </p>
                <label>
                    
                    <input type="file" ref={this.fileInput} />
                    </label>
                    <br />
                    <br />
                    <br />
                    <RaisedButton label="Submit" primary={true} style={{margin:"15"}} onClick={(event) => this.handleSubmit(event)}/>
                    </div>
                    </div>
                </MuiThemeProvider>
        </div>
        )
    }
}