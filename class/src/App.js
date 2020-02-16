//rcc rfc
import React, { Component } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
}from './components'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            article:"<div>adfgsba</div>",
            todos:[{
                id:1,
                title:"吃饭",
                isCompleted:true
            },{
                id:2,
                title:"睡觉",
                isCompleted:false
            }]
        }
    }

    addTodo = (todoTitle) => {
        this.setState({
            //concat返回的是一个数组 puch语句返回的是数组长度
            todos:this.state.todos.concat(
                {
                    id:Math.random,
                    title:todoTitle,
                    isCompleted:false
                }
            )
        })   
    //或者这样
    // const newTodos = [...this.state.todos]
    //     newTodos.push(
    //         {
    //             id:Math.random,
    //             title:todoTitle,
    //             isCompleted:false
    //         }
    //     )
    //     this.setState({
    //         todos:newTodos
    //     })
    }

    onCompletedChange = (id) => {
        this.setState((prevState) => {
            return  {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id){
                        todo.isCompleted = !todo.isCompleted
                    }
                    return todo
                })
            }
        })
    }
    render() {
        return (
            <div>
                {
                    <div dangerouslySetInnerHTML={{__html:this.state.article}}/>
                }
                <TodoHeader title="待办事项">
                    今日事,今日毕
                </TodoHeader>
                <TodoInput btnText="添加" addTodo={this.addTodo} />
                <TodoList todos={this.state.todos}  onCompletedChange={this.onCompletedChange} />
                <Like />
            </div>
        )
    }
}
