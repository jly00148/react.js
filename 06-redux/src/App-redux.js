import React, { Component } from 'react';
import { DatePicker,Button,Input,Row,Col,List } from 'antd'
import  Item from './Item.js';
import store from './store/index.js';
import './App-style.css';

class App extends Component{
    constructor(props){
        super(props)
        this.handChange = this.handChange.bind(this);
        this.handAdd= this.handAdd.bind(this);
        this.state = store.getState();
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }

    handAdd(){
        const payload = this.state.task;
        const action ={
            type:'add_item',
            payload:payload
        }

        // this.setState(()=>({
        //     list:[...this.state.list,this.state.task],
        //     task:''
        // }))

        store.dispatch(action);
    }

    handChange(ev){
        const task = ev.target.value;

        // const task = ev.target.value;
        // this.setState({
        //     task:task
        // })

        const action = {
            type:'change_item',
            payload:task
        }
        store.dispatch(action);
    }

    handDel(index){
        // const list = this.state.list;
        // list.splice(index,1);
        // this.setState({
        //     list:list
        // })
        const payload = index;
        const action = {
            type:'del_item',
            payload
        }
        store.dispatch(action);
    }
    getItems(){
        return this.state.list.map((value,index)=>{
            return <Item key={index} value={value} handDel={this.handDel.bind(this,index)}/>
        })
    }
    render(){
        return(
            <div className="App">
                <Row>
                    <Col span={18}> 
                        <Input 
                            onChange={this.handChange} 
                            value={this.state.task} 
                        />
                </Col>
                <Col span={6}>
                        <Button 
                        className="btn" 
                            type="primary"
                            onClick={this.handAdd}>
                            按钮
                        </Button>
                    </Col>
                </Row>
                <List
                    style={{marginTop:10}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index)=>(
                        <List.Item
                            onClick={this.handDel.bind(this,index)}
                        >
                            {item}
                        </List.Item>

                    )}
                />
            </div>
        )
    }
}

export default App;