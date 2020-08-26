
install steps:
===

```
1. 安装install：
    npm i react-redux --save
```
```
2. store文件夹下index.js下引入react-redux
    import { Provider } from 'react-redux'
```
```
3. Provider组件包裹<App />组件,
    ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
```
```
4.App组件下的所有的组件都能用到store
```