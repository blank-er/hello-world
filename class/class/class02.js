import React from 'react'
import {render} from 'react-dom'

//定义组件的第二种方式,使用类

class App extends React.Component{
    render () {
        return(
            <div>
              <h1>类组件</h1>
              <p>{this.props.desc}</p>
            </div>
        )
    }
}

// 类组件原理
// const app = new App({
//     desc:'类组件是继承React.Component的'
// }).render()

render(
    <App desc='类组件是继承React.Component的' />,
    document.querySelector("#root")
)