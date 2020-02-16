import React, { Component } from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'
import './index.css'

//元素中添加样式的几种方式

const listItem = styled.li`
    color:#f40
`

class App extends Component{
    render () {
        const style = {color:'#f40'}
        return(
            <div>
                <h1>元素中的样式</h1>
                <ol>
                    <li style={style}>使用style内联创建</li>
                    <li className="has-text-red">使用class的方式,但是在react中要写成className</li>
                    <li className={classNames('a', {'b':true, 'c':false})}
                    >要动态添加不同的className就可以使用第三方的包叫classNames,比如这个标签的class就只有a,b没有c
                    </li>
                    <listItem>4.使用第三方的包styled-components创建新的组件</listItem>
                </ol>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector("#root")
)