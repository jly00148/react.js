import React, { Component } from 'react';
import  Item from './Item.js';
import './App-style.css';

class App extends Component{
    //初始化
    constructor(props){
        super(props)
        this.state = {
            list:['crossfire','LOL','PUBG'],
            task:''
        }
    }

    handAdd(){
        // console.log('handleClick...');
        //改变state
        this.setState({
            list:[...this.state.list,this.state.task],
            task:''
        })
    }

    handChange(ev){
        // console.log(ev.target.value);
        this.setState({
            task:ev.target.value
        })
    }

    handDel(index){
        const list = this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    render(){
        return(
            <div className="App">
                <input onChange={this.handChange.bind(this)} value={this.state.task} />
                <button className="btn" onClick={this.handAdd.bind(this)}>按钮</button>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            {/* return(<li 
                                key={index}
                                onClick={this.handDel.bind(this,index)}

                                >{value}
                            </li>) */}

                            return <Item key={index} value={value} handDel={this.handDel.bind(this,index)}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;