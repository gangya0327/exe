import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { doneCount, totalCount } = this.props;
    return (
      <div className="footer">
        {doneCount} 个已完成/共有 {totalCount} 个
      </div>
    );
  }
}
