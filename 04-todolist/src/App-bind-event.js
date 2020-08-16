import React, { Component } from 'react';
import './App-style.css';

class App extends Component{
    handleClick(){
        // console.log('handleClick...');
    }
    handChange(ev){
        console.log(ev.target.value);
    }
    render(){
        return(
            <div className="App">
                <input onChange={this.handChange.bind(this)} />
                <button className="btn" onClick={this.handleClick.bind(this)}>按钮</button>
                <ul>
                    <li>crossfire</li>
                    <li>LOL</li>
                    <li>PUBG</li>
                </ul>
            </div>
        )
    }
}

export default App;