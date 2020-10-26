import React ,{Component} from 'react';
//import { createForm, formShape } from 'rc-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Button } from 'reactstrap';
import TextField from 'material-ui/TextField';
import { ImageExposureZero } from 'material-ui/svg-icons';
class X extends Component{
    render(){
        return (<h1>Inside X</h1>)
    }
} 
class Y extends Component{
    render(){
        return (<h1>Inside Y</h1>)
    }
} 
class Test extends Component{
    constructor(props){
        super(props)
        this.state={A:1,B:0}
        this.show=this.show.bind(this)
        this.toggle=this.toggle.bind(this)

    }
    show(){
        
        if (this.state.A){
            return <X/>
        }
        return <Y/>
    }
    toggle(){
        
        if (this.state.A==1){this.setState({A:0,B:1});}
        else{this.setState({A:1,B:0});}
    }
    render(){
        return (
            <div>
                <this.show/>
                
                <Button color="primary" onClick={this.toggle}>DToggle</Button>{' '}
            </div>
            
        );
    }
}
export { Test,X,Y};