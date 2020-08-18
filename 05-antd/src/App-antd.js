import React, { Component } from 'react';
import { DatePicker } from 'antd'
import  Item from './Item.js';
import './App-style.css';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:['crossfire'],
            task:''
        }
        this.handChange = this.handChange.bind(this);
        this.handAdd= this.handAdd.bind(this);
    }

    handAdd(){
        this.setState(()=>({
            list:[...this.state.list,this.state.task],
            task:''
        }))
    }

    handChange(ev){
        const task = this.input.value;
        this.setState({
            task:task
        })
    }

    handDel(index){
        const list = this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    getItems(){
        return this.state.list.map((value,index)=>{
            return <Item key={index} value={value} handDel={this.handDel.bind(this,index)}/>
        })
    }
    render(){
        console.log('App render...');
        return(
            <div className="App">
                <input ref={(input)=>{this.input = input}} onChange={this.handChange} value={this.state.task} />
                <button className="btn" onClick={this.handAdd}>按钮</button>
                <ul>
                    {
                        this.getItems()
                    }
                </ul>
                <DatePicker />
            </div>
        )
    }
}

export default App;