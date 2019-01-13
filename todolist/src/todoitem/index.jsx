import React, { Component } from "react";
import "./index.css"

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  toggleTaskStatus = () => {};
  delTask = () => {
    let { deleteTask, item } = this.props;
    deleteTask(item);
  };
  render() {
    let { item } = this.props;
    return (
      <div className="item-container">
        <div className="item-innner" onClick={this.toggleTaskStatus}>
          <span className="ckb-container">
            <input type="checkbox" className="ckb" />
            <span className="text">{item.text}</span>
          </span>
        </div>
        <div className="del-container" onClick={this.delTask}>
          删除
        </div>
      </div>
    );
  }
}
