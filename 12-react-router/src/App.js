import React, { Component } from 'react';
import Todolist from './pages/Todolist';
import { BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';//h5路由会向后台发送请求,配制文件添加historyApiFallback:true
// import { HashRouter as Router,Route, Link } from 'react-router-dom';//hash路由并不会向后台发送请求



class Home extends Component{
    render(){
        return <h1>Home page</h1>
    }
}

class About extends Component{
    render(){
        // console.log(this.props)
        return <h1>About page,this id is { this.props.match.params.id }</h1>
    }
}

class Admin extends Component{
    render(){
        // return <h1>Admin page</h1>
        return(
            <Switch>
                <Route exact path="/Admin" render={()=><h1>Admin page</h1>}/>
                <Route path="/Admin/proflie" render={()=><h1>Admin proflie page</h1>}/>
                <Route path="/Admin/:id" render={(props)=><h1>Admin/123 page,this id is {props.match.params.id}</h1>}/>
            </Switch>
            )
    }
}

class App extends Component{
    render(){
            return(
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About/123">About</Link></li>
                                <li><Link to="/Todilist">todolist</Link></li>
                                <li><Link to="/Admin">Admin</Link></li>
                                <li><Link to="/Admin/123">Admin/123</Link></li>
                                <li><Link to="/Admin/proflie">Admin/proflie</Link></li>
                            </ul>
                        </nav>
                        <Route path="/" exact component={Home}/>

                        {/* <Route path="/About/:id" render={()=><h1>About page</h1>}/> */}
                        <Route path="/About/:id" component={About}/>

                        <Route path="/Todilist" component={Todolist}/>
                        <Route path="/Admin" component={Admin}/>
                    </div>
                </Router>
            )
    }
}


export default App;