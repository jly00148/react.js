import React, { Component } from 'react';
import { Button,Input,Row,Col,List } from 'antd'

class AppUI extends Component{
    constructor(props){
        super(props);
    }

    handDel = this.handDel.bind(this);
    render(){
        return(
            <div className="App">
                <Row>
                    <Col span={18}> 
                        <Input 
                            onChange={this.handChange} 
                            value={this.props.task} 
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
                    dataSource={this.props.list}
                    renderItem={(item,index)=>(
                        <List.Item
                            onClick={this.props.handDel.bind(this,index)}
                        >
                            {item}
                        </List.Item>

                    )}
                />
            </div>
        )
    }
}

export default AppUI;