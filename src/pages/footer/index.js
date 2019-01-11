import React, { Component } from "react";

import "./style.scss";

import Vcenter from "../../component/vcenter";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="h-con">
          <Vcenter>
            <div>footer</div>
          </Vcenter>
      </div>
    );
  }
}

export default App;
