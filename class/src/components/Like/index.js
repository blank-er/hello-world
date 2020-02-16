import React, { Component } from 'react'

export default class Like extends Component {
    constructor() {
        super()
        this.state = {
            isLiked:false
        }
    }
    handleLikedClick = () =>{
        //修改state数据使用setState方法,setState可以有两个参数
        //第一个参数有两种情况,第一种情况是一个对象,第二种情况是一个方法(参数是上一次的state)
        //第二个参数是一个回调函数
        // this.setState({
        //     isLiked: !this.state.isLiked
        // })
        //由于setState是异步的,如果要获取最新的state,应该在第二个参数(一个回调函数)中获取
        this.setState((prevState) => {
            return {
                isLiked: !prevState.isLiked
            }
        },() => {
            console.log(this.state.isLiked)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleLikedClick}>
                {
                    this.state.isLiked ? ' 踩' : '赞 '
                }
                </button>
                <span>
                    {
                        this.state.isLiked ? '👍' : '👎'
                    }
                </span>
            </div>
        )
    }
}
