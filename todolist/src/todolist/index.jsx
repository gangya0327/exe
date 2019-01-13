import React, { Component } from "react";
import TodoItem from "../todoitem";
import Footer from "../footer";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { list, deleteTask } = this.props;
    let comps = list.map(item => {
      return <TodoItem item={item} key={item.id} deleteTask={deleteTask} />;
    });

    let totalCount = list.length
    let doneCount = list.filter((item)=>{
      return item.status
    }).length
    return (
      <div className="list-container">
        <div className="title">React Todolist</div>
        <div className="list">{comps}</div>
        <div className="footer"><Footer doneCount={doneCount} totalCount={totalCount}/></div>
      </div>
    );
  }
}
