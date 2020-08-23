import React, { Component } from 'react';
import { Button,Input,Row,Col,List } from 'antd'


// UI组件
// class AppUI extends Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return(
//             <div className="App">
//                 <Row>
//                     <Col span={18}> 
//                         <Input 
//                             onChange={this.props.handChange} 
//                             value={this.props.task} 
//                         />
//                 </Col>
//                 <Col span={6}>
//                         <Button 
//                         className="btn" 
//                             type="primary"
//                             onClick={this.props.handAdd}>
//                             按钮
//                         </Button>
//                     </Col>
//                 </Row>
//                 <List
//                     style={{marginTop:10}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index)=>(
//                         <List.Item
//                             // onClick={this.props.handDel.bind(this,index)}
//                             onClick={()=>{this.props.handDel(index)}}
//                         >
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

// 简单写法(把上述return部分复制下来,传入props,去掉this,结构赋值props)
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