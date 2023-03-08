import React, { Fragment, Component } from "react";
import Header from "./Header";
import Content from "./Content";

class App extends Component {
  render() {
    return React.createElement(
      Fragment,
      null,
      React.createElement(Header, null),
      React.createElement(Content, null)
    );
  }
}

export default App;
