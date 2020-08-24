import React, { Component } from 'react';
import { Button,Input,Row,Col,List } from 'antd'

const AppUI = (props)=>{
    const { task,list,handChange,handAdd,handDel } = props;
    return (
        <div className="App">
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
    )
}

export default AppUI;