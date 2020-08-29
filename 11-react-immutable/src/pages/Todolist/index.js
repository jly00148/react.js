import React, { Component } from 'react';
import { Button,Input,Row,Col,List } from 'antd'
import { connect } from 'react-redux';
import './index.css';

import  { actions } from './store/index.js';

// 容器组件
class Todolist extends Component{
    componentDidMount(){
        this.props.handInitData()
    }
    render(){
        const { task,list,handChange,handAdd,handDel } = this.props;
        return  <div className="Todolist">
                    <Row>
                        <Col span={18}> 
                            <Input 
                                onChange={handChange} 
                                value={task} 
                            />
                    </Col>
                    <Col span={6}>
                            <Button 
                            className="btn" 
                                type="primary"
                                onClick={handAdd}>
                                按钮
                            </Button>
                        </Col>
                    </Row>
                    <List
                        style={{marginTop:10}}
                        bordered
                        dataSource={list}
                        renderItem={(item,index)=>(
                            <List.Item
                                onClick={()=>{handDel(index)}}
                            >
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
    }
}

const mapStateToProps = (state)=>{
    console.log('state',state)
    return {
        list:state.todolist.list,
        task:state.todolist.task
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handChange:(ev)=>{
            const task = ev.target.value;
            store.dispatch(actions.getChangeCreator(task))
        },
        handAdd:()=>{
            const payload = store.getState().task;
            store.dispatch(actions.getAddCreator(payload));

        },
        handDel:(index)=>{
            const payload = index;
            store.dispatch(actions.getDelCreator(payload))
        },
        handInitData:()=>{
            dispatch(actions.getRequestInitData())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist);