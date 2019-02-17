import React, { Component } from 'react';
import PicTab from './PicTab'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <PicTab PicJson={{
          picUrl: ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg", "./img/7.jpg", "./img/8.jpg"],
          text: ["图片1", "图片2", "图片3", "图片4", "图片5", "图片6", "图片7", "图片8"],
          bText: ["详细介绍1", "详细介绍2", "详细介绍3", "详细介绍4", "详细介绍5", "详细介绍6", "详细介绍7", "详细介绍8",]
        }}></PicTab>
      </div>
    );
  }
}

export default App;
