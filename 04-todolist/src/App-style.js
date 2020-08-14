import React, { Component } from 'react';
import './App-style.css';

class App extends Component{
    render(){
        return(
            <div>
                <input />
                <button className="btn">按钮</button>
                <ul style={{ color:'red' }}>
                {
                    //ul标签内部写js代码用jsx语法
                }
                    <li>crossfire</li>
                    <li>LOL</li>
                    <li>PUBG</li>
                </ul>
            </div>
        )
    }
}

export default App;