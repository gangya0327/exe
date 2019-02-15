import React, { Component } from 'react';
// import Tab from './Tab';
import { CSSTransitionGroup } from 'react-transition-group'
import './App.css';

// let tabJson = {
//     // imgUrl: ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg',],
//     // imgUrl: ['./img/5.jpg','./img/6.jpg','./img/7.jpg','./img/8.jpg',],
//     imgUrl: ['./img/9.jpg','./img/10.jpg','./img/11.jpg','./img/12.jpg',],
//     timer: 3000
// }


class App extends Component {
    constructor() {
        super()
        this.state = {
            myarr: ["myInput"],
            v: true
        }
    }
    onFocus() {
        this.setState({
            myarr: ["myInput", "active"]
        })
    }
    onBlur() {
        this.setState({
            myarr: ["myInput"]
        })
    }
    css() {
        return `
            .myDiv {
                width: 150px;
                height: 80px;
                background: red;
                margin: 20px 0;
            }
            .leo {
                width: 150px;
                height: 80px;
                background: red;
            }
            .leo-enter { // 进入之前的样式
                opacity: 0;
                margin-left: 200px;
            }
            .leo-enter-active { // 进入之后的样式
                opacity: 1;
                transition: 1.7s;
                margin-left: 0;
            }
            .leo-leave { // 离开的样式
                opacity: 1;
                transition: 1.7s;
                margin-left: 300px;             
            }
            .leo-leave-enter { // 离开之后的样式
                opacity: 0;
            }
            .leo-appear {
                opacity: 1;
                background: black;
            }
            .leo-appear-active {
                opacity: 0;
                background: yellow;
                transition: 1.7s;
            }
        `
    }
    click() {
        console.log(this.state.v)
        this.setState({
            v: !this.state.v
        })
    }
    render() {
        let oDiv = [this.state.v ? <div key={1} className='leo'></div> : '']
        return (
            <div className="App">
                {/* <Tab tabJson={tabJson}></Tab> */}

                <input type="text" className={this.state.myarr.join(" ")} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} />
                <style dangerouslySetInnerHTML={{ __html: this.css() }}></style>
                <br />
                <input type="button" value="切换" onClick={this.click.bind(this)} />
                <div className="myDiv" style={{ display: this.state.v ? "block" : "none" }}></div>
                <CSSTransitionGroup
                    transitionName='leo'
                    transitionEnterTimeout={1700}
                    transitionLeaveTimeout={1700}
                    transitionAppear={true}
                >
                    {oDiv}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default App;
