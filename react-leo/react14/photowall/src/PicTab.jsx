import React, { Component } from 'react'

export default class PicTab extends Component {
    constructor() {
        super()
        this.state = {
            rotate: [],
            left: [],
            top: [],
            zIndex: [],
            index: 0,
            rotateY: []
        }
    }
    componentDidMount() {
        this.random()
    }
    random(index) {
        let newRotate = []
        let newLeft = []
        let newTop = []
        let newZIndex = []
        let newRotateY = []
        this.props.PicJson.picUrl.forEach((v, i) => {
            newRotateY.push(0)
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
            zIndex: newZIndex,
            rotateY: newRotateY
        })
    }
    click(i, e) {
        this.random(i)
        if (e.target.classList.contains("active")) {
            if (e.target.classList.contains("dbActive")) {
                e.target.classList.remove("dbActive")
                this.state.rotateY.splice(i, 1, 0)
            } else {
                e.target.classList.add("dbActive")
                this.state.rotateY.splice(i, 1, 180)
            }
            this.setState({
                rotateY: this.state.rotateY
            })
        } else {
            this.setState({
                index: i
            })
        }
    }
    render() {
        console.log(this.props.PicJson)
        let aLi = []
        let oLi = []
        this.props.PicJson.picUrl.forEach((v, i) => {
            aLi.push(<li key={i}
                style={{
                    transform: "perspective(800px) rotate(" + this.state.rotate[i] + "deg) rotateY(" + this.state.rotateY[i] + "deg)",
                    left: this.state.left[i],
                    top: this.state.top[i],
                    transition: Math.random() * 0.4 + 0.3 + "s",
                    zIndex: this.state.zIndex[i]
                }}>
                <div className="zm">
                    <img src={v} alt="" />
                    <div className="textNode">{this.props.PicJson.text[i]}</div>
                </div>
                <div className="bm">{this.props.PicJson.bText[i]}</div>
            </li>)
            oLi.push(<li className={i === this.state.index ? "active" : ""} key={i} onClick={this.click.bind(this, i)}></li>)
        });
        return (
            <div>
                <ul className="myUl">{aLi}</ul>
                <ol className="myOl">{oLi}</ol>
            </div>
        )
    }
}
