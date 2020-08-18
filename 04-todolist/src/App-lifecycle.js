import React, { Component } from 'react';
import  Item from './Item.js';
import './App-style.css';

class App extends Component{
    constructor(props){
        console.log('constructor...');
        super(props)
        this.state = {
            list:['crossfire'],
            task:''
        }
        this.handChange = this.handChange.bind(this);
        this.handAdd= this.handAdd.bind(this);
    }

    static getDerivedStateFromProps(props,state){
        // 紧贴render方法，render方法执行之前执行
        // props是App组件挂载时传入的参数
        console.log('props,state',props,state);

        // 必需有返回值
        // return {
        //     task:'hello'
        // }
        return null
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('nextProps,nextState',nextProps,nextState);
        return true
    }

    getSnapshotBeforeUpdate(nextProps,nextState){
        // 保存真实DOM更新前的某些数据
        console.log('nextProps,nextState',nextProps,nextState);
        return 123
    }

    componentDidUpdate(nextProps,nextState,snapshot){
        console.log('nextProps,nextState,snapshot',nextProps,nextState,snapshot)
    }

    componentDidMount(){
        console.log('componentDidMount...');

        //组件挂载完用于发送ajax
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
            </div>
        )
    }
}

export default App;