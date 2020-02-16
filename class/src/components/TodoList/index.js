import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TodoList extends Component {
    static propTypes = {
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            isCompleted:PropTypes.bool.isRequired
        })).isRequired
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo =>{
                        return(
                            <TodoItem
                            // key={todo.id}
                            // id={todo.id}
                            // title={todo.title}
                            // isCompleted={todo.isCompleted}
                            key={todo.id}
                            onCompletedChange = {this.props.onCompletedChange}
                            {...todo} //传入全部属性
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
