import React, { Component } from 'react'

class Tab extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            transitions: 0,
            w: 0,
            myTime: null
        }
    }
    componentDidMount(){
        this.setState({
            transitions: this.props.tabJson.timer/1000,
            w: 100
        })
        clearInterval(this.state.myTime)
        this.state.myTime = setInterval(()=>{

        })
    }
    click(i) {
        this.setState({
            index: i
        })
    }
    leftClick() {
        let i = this.state.index
        if (i === 0) {
            i = this.props.tabJson.imgUrl.length - 1
        } else {
            i--
        }
        this.setState({
            index: i
        })
    }
    rightClick() {
        let i = this.state.index
        if (i === this.props.tabJson.imgUrl.length - 1) {
            i = 0
        } else {
            i++
        }
        this.setState({
            index: i
        })
    }
    render() {
        var aLi = [];
        var oli = [];
        this.props.tabJson.imgUrl.forEach((v, i) => {
            aLi.push(<li key={i}><img src={v} alt="" /></li>)
            oli.push(<li key={i} className={i === this.state.index ? "active" : ""} onClick={this.click.bind(this, i)}></li>)
        })
        return (
            <div className='tab'>
                <div className="line" style={{transition: this.state.transitions + "s linear"}}></div>
                <div className="left" onClick={this.leftClick.bind(this)}></div>
                <ul style={{ width: this.props.tabJson.imgUrl.length * 960 + 'px', left: this.state.index * -960 + "px" }}>{aLi}</ul>
                <ol>{oli}</ol>
                <div className="right" onClick={this.rightClick.bind(this)}></div>
            </div>
        )
    }
}
export default Tab