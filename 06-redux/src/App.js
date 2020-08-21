import React, { Component } from 'react';
import  Item from './Item.js';
import store from './store/index.js';
import './App-style.css';
import { getChangeCreator,getAddCreator,getDelCreator } from './store/actionCreator.js';
import AppUI from './App-UI.js';
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
        store.dispatch(getAddCreator(payload));

    }

    handChange(ev){
        const task = ev.target.value;
        store.dispatch(getChangeCreator(task));
    }

    handDel(index){
        const payload = index;
        store.dispatch(getDelCreator(payload))
    }

    render(){
        return(
            <AppUI
                task={this.task}
                list={this.state.list}
                handDel={this.handDel}
                handChange={this.handChange}
                handAdd={this.handAdd}
            />
        )
    }
}

export default App;