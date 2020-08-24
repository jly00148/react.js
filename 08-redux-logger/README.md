
install steps:
===

```
1. 安装install：
    npm i redux-logger --save
```
```
2. store文件夹下index.js下引入redux-thunk
    import { logger } from 'redux-logger'
```
```
3. logger放入store：
    const store = createStore(reducer,applyMiddleware(thunk,logger));
```