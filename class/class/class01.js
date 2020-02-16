import React from 'react'
import ReactDOM from 'react-dom'

//创建组件的第一种方式:使用箭头函数,但是开头字母要大写

// const app = <h1>welcome react</h1>
// const createApp = (props) =>{
//     return (
//     <div>
//         {/* 只要在jsx里要插入js的代码,就加一层花括号即可,注释也是js,所以这里的注释加了一层花括号 */}
//         <h1>welcome {props.title}!</h1>
//         <p>优秀的{props.title}</p>
//     </div>
//     )
// }

// const app = createApp({
//     title: 'react 16.8'
// })

const App = (props) =>{
    return (
    <div>
        {/* 只要在jsx里要插入js的代码,就加一层花括号即可,注释也是js,所以这里的注释加了一层花括号 */}
        <h1 title={props.title}>welcome {props.title}!</h1>
        <p>优秀的{props.title}</p>
    </div>
    )
}

ReactDOM.render(
    <App title="1901" />,
    document.querySelector('#root')
)