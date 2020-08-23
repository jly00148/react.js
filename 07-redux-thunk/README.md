
install steps:
===

```
1. 安装install：
    npm i redux-thunk --save
```
```
2. store文件夹下index.js下引入中间件applyMiddleware,和redux-thunk
    import {createStore,applyMiddleware} from 'redux';
    import thunk from 'redux-thunk'
```
```
3. thunk放入store：
    const store = createStore(reducer,applyMiddleware(thunk));
```