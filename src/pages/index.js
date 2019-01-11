import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Root extends Component{
  constructor (props) {
      super(props)
      this.state = {
          
      }
  }
  render() {
    return (
      <div>
         <Route
          exact
          path={this.match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}

export default Root