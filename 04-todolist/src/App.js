import React, { Component,Fragment } from 'react';

class App extends Component{
    render(){
        //1. return <h1>hello,react</h1>

        //2. return <Fragment>
        //         <h1>hello,react</h1>
        //         <p>please edit...</p>
        //     </Fragment>

        //3. return(
        //     <h1>hello,react</h1>
        // )

        return(
            <div>
                {
                    //单行注释
                    /*
                        多行注释
                     */
                }
                <h1>hello,react</h1>
            </div> 
        )
    }
}

export default App;