import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
  }
  submitTask = e => {
    e.preventDefault();
    let { saveTask } = this.props;
    let value = this.ipt.value;
    if (value) {
      saveTask(value);
      this.ipt.value = "";
    }
  };
  render() {
    return (
      <div className="form-container">
        <form className="form">
          <div className="ipt-container">
            <input
              type="text"
              placeholder="输入任务"
              ref={ipt => {
                this.ipt = ipt;
              }}
            />
          </div>
          <div className="btn-container" onClick={this.submitTask}>
            <button>保存任务</button>
          </div>
        </form>
      </div>
    );
  }
}
