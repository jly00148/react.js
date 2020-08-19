
install steps:
===

```
1. store文件夹下index.js
    npm i redux --save
```
```
2. 导出index.js(内部箭头函数为reducer.js),导入reducer.js
    const store = createStore(reducer)

    export default store
```
```
3. App-redux.js导入store文件夹下index.js
    import { createStore } from 'redux';
```


```
4. App-redux.js获取初始state
store.getState()
```