import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MHeader from "./pages/header";
import MFooter from "./pages/footer";

import routes from "./router";

class App extends Component {
  constructor (props) {
      super(props)
      this.state = {
      }
  }

  render() {
    return (
        <Router>
          <div>
            <MHeader />
            <div>
              {routes.map((r, key) => {
                return (
                  <Route
                    render={props => (
                      <r.component {...props} routes={r.routes} />
                    )}
                    exact={!!r.exact}
                    key={key}
                    path={r.path}
                  />
                );
              })}
            </div>
            <MFooter />
          </div>
        </Router>
    );
  }
}

export default App;
