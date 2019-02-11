import React, { Component } from 'react'

class Tab extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            transitions: 0.7,
            w: 0,
            setTimer: null,
            myTime: null
        }
    }
    componentDidMount() {
        this.autoPlay()
    }
    autoPlay() {
        clearInterval(this.state.myTime)
        clearInterval(this.state.setTimer)
        this.state.myTime = setTimeout(() => {
            this.setState({
                transitions: this.props.tabJson.timer / 1000,
                w: 100
            })
        }, 0)
        this.state.setTimer = setInterval(() => {
            this.rightClick()
            this.setState({
                transitions: 0,
                w: 0
            })
            setTimeout(() => {
                this.setState({
                    transitions: this.props.tabJson.timer / 1000,
                    w: 100
                })
            }, 10);
        }, this.props.tabJson.timer)
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
    mouseOver() {
        clearInterval(this.state.myTime)
        clearInterval(this.state.setTimer)
        this.setState({
            transitions: 0,
            w: 0
        })
    }
    mouseOut() {
        this.autoPlay()
    }
    render() {
        var aLi = [];
        var oli = [];
        this.props.tabJson.imgUrl.forEach((v, i) => {
            aLi.push(<li key={i}><img src={v} alt="" /></li>)
            oli.push(<li key={i} className={i === this.state.index ? "active" : ""} onClick={this.click.bind(this, i)}></li>)
        })
        return (
            <div className='tab' onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
                <div className="line" style={{ transition: this.state.transitions + "s linear", width: this.state.w + "%" }}></div>
                <div className="left" onClick={this.leftClick.bind(this)}></div>
                <ul style={{ width: this.props.tabJson.imgUrl.length * 960 + 'px', left: this.state.index * -960 + "px" }}>{aLi}</ul>
                <ol>{oli}</ol>
                <div className="right" onClick={this.rightClick.bind(this)}></div>
            </div>
        )
    }
}
export default Tab