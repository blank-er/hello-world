//react里通过ref获取组件或dom元素,要使用ref之前必须调用React.createRef来创建ref方法
import React, { Component, createRef } from 'react'
//import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    // static propTypes = {
    //     btnText:PropTypes.string.isRequired,
    // }

    // static defaultProps = {
    //     btnText:"add"
    // }

    // state = {
    //     btnText:"add"
    // }

    constructor() {
        super()
        this.state = {
            btnText:"add",
            inputValue:""
        }
        //在constructor里创建ref
        this.inputDom = createRef()
    }

    //完全受控组件:所有数据均从props得来
    //半受控组价:数据有外部props和内部state两种形式
    //非受控组件:数据只有内部state一种形式

    handleInputChange = (e) => {
        this.setState({
            inputValue:e.currentTarget.value
        })
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13){
            this.handleAddClick()
        }
    }

    handleAddClick = () => {
        if (this.state.inputValue === ''){
            return
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue:''
        }, () => {
            this.inputDom.current.focus()
        })
    }

    handle

    render() {
        return (
            <div>
                <input
                type="text" 
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                onKeyUp={this.handleKeyUp}
                ref={this.inputDom}
                />
                <button onClick={this.handleAddClick}>{this.state.btnText}</button>
            </div>
        )
    }
}