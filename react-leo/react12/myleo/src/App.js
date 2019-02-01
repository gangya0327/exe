import React, { Component } from 'react';
import Tab from './Tab';
import './App.css';

let tabJson = {
    // imgUrl: ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg',],
    // imgUrl: ['./img/5.jpg','./img/6.jpg','./img/7.jpg','./img/8.jpg',],
    imgUrl: ['./img/9.jpg','./img/10.jpg','./img/11.jpg','./img/12.jpg',],
    timer: 2000
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Tab tabJson={tabJson}></Tab>
            </div>
        );
    }
}

export default App;
