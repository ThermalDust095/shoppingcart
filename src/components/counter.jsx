import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Counter extends Component { 
    state = {
        count:0,
        tags:['tag1','tag2','tag3']
    }

    styles = {
        fontSize: 30,
        fontWeight:'bold'
    }

    handleIncrement = () =>{    
        this.setState({count: this.state.count+1})
    };

    render() { 

        let classes = "badge ";
        classes += (this.state.count === 0) ? "badge-warning m-2" : "badge-info m-2";

        return( <div>
                <span style={this.styles} className= {classes}>{this.state.count}</span>
                <button 
                onClick = {()=>this.handleIncrement()} 
                className="btn btn-outline-info btn-sm">Increment</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
            </div>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    }
}
 
export default Counter;