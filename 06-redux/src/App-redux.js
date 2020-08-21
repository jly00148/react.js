import React, { Component } from 'react';
import { DatePicker,Button,Input,Row,Col,List } from 'antd'
import  Item from './Item.js';
import store from './store/index.js';
import './App-style.css';
import { getChangeCreator,getAddCreator,getDelCreator } from './store/actionCreator.js';

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
        // const action = {
        //     type:ADD_ITEM,
        //     payload:payload
        // }
        // this.setState(()=>({
        //     list:[...this.state.list,this.state.task],
        //     task:''
        // }))
        // store.dispatch(action);

        store.dispatch(getAddCreator(payload));

    }

    handChange(ev){
        // const task = ev.target.value;
        // this.setState({
        //     task:task
        // })
        // const action = {
        //     type:CHANGE_ITEM,
        //     payload:task
        // }
        // store.dispatch(action);

        const task = ev.target.value;
        store.dispatch(getChangeCreator(task));
    }

    handDel(index){
        // const list = this.state.list;
        // list.splice(index,1);
        // this.setState({
        //     list:list
        // })
        // const payload = index;
        // const action = {
        //     type:DEL_ITEM,
        //     payload
        // }
        // store.dispatch(action);
        
        const payload = index;
        store.dispatch(getDelCreator(payload))
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