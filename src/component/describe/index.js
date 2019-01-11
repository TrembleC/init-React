import React, { Component } from "react";
import "./style.scss";

class describe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="d-con" style={this.props.style}>
        {this.props.img ? (
          <div style={this.props.imgstl} className="d-img">
            <img src={this.props.img} alt="bg" />
          </div>
        ) : (
          ""
        )}

        <div
          className="d-title"
          style={Object.assign({}, this.props.fcolor, this.props.marbtm)}
        >
          {this.props.name.title}
        </div>
        <div className="d-detail" style={this.props.dwidth}>
          {this.props.name.content.map((value, key) => {
            return (
              <div key={key} style={this.props.fcolor}>
                {value.detail}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default describe;
