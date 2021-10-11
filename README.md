# [React](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

## 定义:React 是一个用于构建用户界面的 JavaScript 库.
 * **声明性**：_React 使创建交互式 UI 变得轻松。为应用程序中的每个状态设计简单的视图，当数据发生变化时，React 将有效地更新和呈现正确的组件。 声明式视图使您的代码更可预测、更易于理解且更易于调试。_
 * **基于组件**：_构建管理自己状态的封装组件，然后组合它们以制作复杂的 UI。 由于组件逻辑是用 JavaScript 而不是模板编写的，因此您可以轻松地通过应用程序传递丰富的数据并将状态保持在 DOM 之外。_
 * **一次学习，随处编写**：_我们不对您的技术堆栈的其余部分做出假设，因此您可以在 React 中开发新功能而无需重写现有代码。React 还可以使用 Node 在服务器上渲染，并使用 移动应用程序提供支持React Native。_  

[了解如何在您自己的项目中使用 React ](https://reactjs.org/docs/getting-started.html).

## 安装和使用：
 * **手动安装(02-install)**：  
    1. **安装react模块**：_npm i react react-dom --save_
    2. **安装babel**：_npm i babel-core babel-loader@7 babel-preset-env babel-preset-react --save-dev_
    3. **配制文件添加babel**：
    ```
        {
            test:/\.js$/,
            exclude:/(node_modules)/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['env','react']
                }
            }
        }
    ```

---

 * **脚手架create-react-app(03-app)**：
 1. npx create-react-app 03-app(folder's name)

 2. cd 03-app/

 3. yarn start(Starts the development server.)

 4. Other commands
    [1] yarn build(Bundles the app into static files for production.)
    [2] yarn test(Starts the test runner.)
    [3] yarn eject(Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!)

## props-state-render关系：
 * _this.state存放内部数据，this.props存放外部数据，render负责渲染_
 * _当组件的state或者props发生改变时，render函数会重新执行_
 * _当父组件的render执行时，子组件的render也会执行_

## 解释定义：
 * **受控文件**：_一些表单(input、textarea和select)的初始化值只能来源于组件内部数据state,这些表单元素的值更新需要通过控制用户的输入来更新state的实现，被React以这种方式控制取值的表单输入元素就叫'受控文件'_
 * **非受控文件**：_表单数据将由DOM节点处理的组件,ref获取dom节点_
    ```

    constructor(props){
        super(props)
        this.state = {
            content:''
        }
    }

    handleChange(){
        //由于input节点已经挂载到app实例上，在这里直接获取
        this.input.value

        this.setState{
            content:this.input.value
        }
    }

    ...
        render(){
            return(
                <div>
                    {
                        /*input节点挂载到app实例上*/
                    }
                    <input value={this.content} ref={input=>{this.input = input}} onChange={this.handleChange.bind(this)} />
                </div>
            )
        }
    ...
    ```
## 生命周期函数(react 16.3版本以后)：
![alt 生命周期函数](https://upload-images.jianshu.io/upload_images/5098241-10770cb6c6743070.png?imageMogr2/auto-orient/strip|imageView2/2)

### 创建时：
|  顺序  | 生命周期函数 | 执行时机 | 应用场景 | 说明 |
| :- | :- |:- |:- |:- |
| 1 | constructor(props) |render函数调用之前，<br>实例化组件对象时调用| 初始化state或者进行方法绑定 |如果不初始化state或进行方法绑定，<br>则不需要实现构造函数 |
| 2 | 单元格 |单元格 |单元格 |单元格 |
| 3 | 单元格 |单元格 |单元格 |单元格 |
| 4 | 单元格 |单元格 |单元格 |单元格 |