import React,{ Component } from 'react';
import PropTypes from 'prop-types';
class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('Item render...');
        const { handDel,value } = this.props;
        return(
            <li onClick={ handDel }>{ value }</li>
        )
    }
}

Item.propTypes = {
    handleDel:PropTypes.func,
    value:PropTypes.string.isRequired
}

Item.defaultProps = {
    value:'value default...'
}
export default Item;