import React from 'react'
import { Prompt } from 'react-router-dom'

class JspangA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            power: false
        }
    }
    changePower(){
        alert('开始启用提示')
        this.setState({
            power: !this.state.power
        })
    }
    render() {
        return (
            <div>
                <Prompt message='是否要离开' when={this.state.power}></Prompt>
                <button onClick={this.changePower.bind(this)}>启用</button>
                <p>raven aaa</p>
            </div>
        )
    }
}

export default JspangA