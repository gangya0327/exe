import React, { Component } from 'react'

export default class PicTab extends Component {
    constructor() {
        super()
        this.state = {
            rotate: [],
            left: [],
            top: [],
            zIndex: []
        }
    }
    //
    componentDidMount() {
        this.random()
    }
    random(index) {
        console.log(index)

        let newRotate = []
        let newLeft = []
        let newTop = []
        let newZIndex = []
        this.props.PicJson.picUrl.forEach((v, i) => {
            if (i === index) {
                newRotate.push(0)
                newLeft.push('calc(50% - 180px)')
                newTop.push('calc(50% - 208px)')
                newZIndex.push(99)
            } else {
                newRotate.push(Math.random() * 720 - 360)
                newLeft.push(Math.random() * window.innerWidth - 180)
                newTop.push(Math.random() * window.innerHeight - 208)
                newZIndex.push(1)
            }
        })
        this.setState({
            rotate: newRotate,
            left: newLeft,
            top: newTop,
            zIndex: newZIndex
        })
    }
    click(i) {
        this.random(i)
    }
    render() {
        console.log(this.props.PicJson)
        let aLi = []
        let oLi = []
        this.props.PicJson.picUrl.forEach((v, i) => {
            aLi.push(<li key={i}
                style={{
                    transform: "rotate(" + this.state.rotate[i] + "deg)",
                    left: this.state.left[i],
                    top: this.state.top[i],
                    transition: Math.random() * 0.4 + 0.3 + "s",
                    zIndex: this.state.zIndex[i]
                }}>
                <img src={v} alt="" />
                <div className="textNode">{this.props.PicJson.text[i]}</div>
            </li>)
            oLi.push(<li key={i} onClick={this.click.bind(this, i)}></li>)
        });
        return (
            <div>
                <ul className="myUl">{aLi}</ul>
                <ol className="myOl">{oLi}</ol>
            </div>
        )
    }
}
