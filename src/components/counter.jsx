import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends Component { 
    state = {
        value : this.props.value
    }

    styles = {
        fontSize: 30,
        fontWeight:'bold'
    }

    handleIncrement = () =>{    
        this.setState({value: this.state.value+1})
    };

    handleDecrement = () =>{
        let value = this.state.value;
        (value<=0) ? this.setState({value: 0}):this.setState({value:value-1});
    }   



    render() { 
        let classes = "badge ";
        classes += (this.state.value === 0) ? "badge-warning m-2" : "badge-info m-2";
        
        return( <div>
                <span style={this.styles} className= {classes}>{this.state.value}</span>
                <button 
                onClick = {()=>this.handleIncrement()}  
                className="btn btn-outline-info btn-sm">+</button>
                <button onClick={()=>this.handleDecrement()} className="btn btn-outline-danger btn-sm m-2">-</button>
                <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
}
 
export default Counter;