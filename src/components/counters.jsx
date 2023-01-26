import React, { Component } from 'react';
import Counter from './counter';
import './counters.css';
import axios from 'axios';

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ],
        x:"Counters",
        i:-1
     } 

    handleDelete= counterId =>{
        const Cntrs = this.state.counters.filter(c => c.id!== counterId)
        this.setState({counters: Cntrs})
    }
    getData(){
    this.state.i+=1;
    console.log(this.state.i)
    axios.get("https://reqres.in/api/users?page=2").then(r=> this.setState({x: r.data.data[this.state.i].email}));
    if(this.state.i===6)this.state.i=0;
        
    }

    handleAdd=()=>{
        let max=0;
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
                <h1 id="title">{this.state.x}</h1>
                <button className="btn btn-secondary m-2" title="inb" onClick={()=>this.handleAdd()}>+</button>
                </div>
                {this.state.counters.map(i => 
                <Counter key={i.id} 
                onDelete = {this.handleDelete}
                id = {i.id}
                value={i.value} 
                selected={true}/>)}
                <button className='btn btn-primary m-2' onClick={()=>this.getData()}>Send</button>
            </div>

        );  
    }
}
 
export default Counters;