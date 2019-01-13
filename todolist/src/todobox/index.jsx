import React, { Component } from "react";
import TodoList from "../todolist";
import TodoForm from "../todoform";
import "./index.css";

export default class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, status: 0, text: "React" },
        { id: 2, status: 0, text: "React" },
        { id: 3, status: 0, text: "React" },
        { id: 4, status: 0, text: "React" }
      ]
    };
  }
  saveTask = text => {
    this.setState({
      list: this.state.list.concat({
        id: this.generateId(),
        text: text,
        status: 0
      })
    });
  };
  deleteTask = item => {
    let index = this.state.list.findIndex(item1 => {
      return item1.id === item.id;
    });
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  };
  //给新增任务一个随机id
  generateId = () => {
    return Math.floor(Math.random() * 9000 + 1000);
  };
  render() {
    let { list } = this.state;
    return (
      <div>
        <TodoList list={list} deleteTask={this.deleteTask}/>
        <TodoForm saveTask={this.saveTask} />
      </div>
    );
  }
}
