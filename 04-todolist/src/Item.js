import React,{Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li onClick={this.props.handDel.bind(this,)}>{this.props.value}</li>
        )
    }
}

//子组件不能操作父组件中的数据
export default Item;