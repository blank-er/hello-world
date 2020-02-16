import React, { Component } from 'react'
//使用PureComponent可以自动在shouleComponentUpdate中进行一次浅比较
export default class TodoItem extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         completedText:''
    //     }
    // }

    handleCheckboxChange = () => {
        this.props.onCompletedChange(this.props.id)
    }

    // static getDerivedStateFromProps(props) {
    //     return{
    //         completedText:props.isCompleted ? "已完成" : "未完成"
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.isCompleted !== nextProps.isCompleted
    }
    render() {
        console.log("func")
        return (
            <li>
                <input type="checkbox" 
                checked={this.props.isCompleted}
                onChange={this.handleCheckboxChange}
                /><span>{this.props.title} {this.props.isCompleted ? "已完成" : "未完成"}</span>
            </li>
        )
    }
}
