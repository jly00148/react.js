import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App-react-reorg.js';
import store from './store/index.js';

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));