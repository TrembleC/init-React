import React, { Component } from "react";
import "./style.scss";

class ctitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className="ctitle">
          <span>{this.props.name}</span>
        </div>
      </div>
    );
  }
}

export default ctitle;
