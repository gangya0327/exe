import React, { Component } from 'react';
import { Motion, spring } from 'react-motion'
import './App.css';

class AppMotion extends Component {
    constructor() {
        super()
        this.state = {
            myArr: ['中国', '德意志', '法兰西', '西班牙'],
            start: '中国',
            v: false
        }
    }
    css() {
        return `
           .myTab {
               width: 200px;
               height: 40px;
               border: 1px solid #ccc;
               text-aligh: center;
               line-height: 40px;
               position: relative;
               margin-bottom: 200px;
           }
           .myTab ul {
               width: 100%;
               border: 1px solid blue;
               position: absolute;
               left: -1px;
               top: 40px;
               border-bottom: none;
               cursor: pointer;
               overflow: hidden;
               transition: .7s;
           }
           .myTab ul li {
               width: 100%;
               height: 40px;
               border-bottom: 1px solid blue;
               transition: .7s;
           }
           .myTab ul li:hover {
              background-color: #333;
              color: #fff;
           }
        `
    }
    click() {
        this.setState({
            v: !this.state.v
        })
        console.log(this.state.v)
    }
    changeText(v) {
        this.setState({
            start: v
        })
    }
    render() {
        let aLi = [];
        this.state.myArr.forEach((v, i) => {
            aLi.push(<li onClick={this.changeText.bind(this, v)} key={i}>{v}</li>)
        })
        return (
            <div className="App">
                <style dangerouslySetInnerHTML={{ __html: this.css() }}></style>
                <div className="myTab" onClick={this.click.bind(this)}>
                    {this.state.start}
                    <ul style={{ height: this.state.v ? this.state.myArr.length * 41 : 0 }}>
                        {aLi}
                    </ul>
                </div>

                <Motion style={{ myleo: spring(this.state.v ? this.state.myArr.length * 41 : 0) }}>
                    {({ myleo }) =>
                        <div className="myTab" onClick={this.click.bind(this)}>
                            {this.state.start}
                            <ul style={{ height: parseInt(myleo) }}>
                                {aLi}
                            </ul>
                        </div>
                    }
                </Motion>
            </div>
        );
    }
}

export default AppMotion;
