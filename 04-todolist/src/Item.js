import React,{Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {handDel,value} = this.props;
        return(
            <li onClick={handDel}>{value}</li>
        )
    }
}

//子组件不能操作父组件中的数据
export default Item;