import React, { Component } from 'react';
import Counter from './counter';
import './counters.css';

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
     } 

    handleDelete= counterId =>{
        const Cntrs = this.state.counters.filter(c => c.id!== counterId)
        this.setState({counters: Cntrs})
    }

    handleAdd=()=>{
        let max=0;
        console.log("To be Added");
        this.state.counters.map(i=> (i.id>=max) ? max=i.id : i.id);
        let cntrs=[];
        for(let i=1;i<=max+1;i++){
            cntrs.push({id:i,value:0})
        }   
        this.setState({counters: cntrs})
    }

    render() { 
        return (
            <div>
                <div className='header'>
                <h1 id="title">Counters</h1>
                <button className="btn btn-secondary m-2" title="inb" onClick={()=>this.handleAdd()}>+</button>
                </div>
                {this.state.counters.map(i => 
                <Counter key={i.id} 
                onDelete = {this.handleDelete}
                id = {i.id}
                value={i.value} 
                selected={true}/>)}
            </div>
        );  
    }
}
 
export default Counters;