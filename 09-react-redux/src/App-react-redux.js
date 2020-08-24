import React, { Component } from 'react';
import { Button,Input,Row,Col,List } from 'antd'
import { connect } from 'react-redux';
import './App-style.css';
import { getChangeCreator,
        getAddCreator,
        getDelCreator,
        getRequestInitData 
        } 
from './store/actionCreator.js';


// 容器组件
class App extends Component{
    render(){
        const { task,list,handChange,handAdd,handDel } = this.props;
        return  <div className="App">
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
    return {
        list:state.list,
        task:state.task
    }
}
export default connect(mapStateToProps)(App);