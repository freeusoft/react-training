import React, { Component } from 'react';

export default class LeftMenu extends Component {
  render() {
    return React.createElement("div", {className: "left-menu"},
      React.createElement("span", {className: "left-menu"}, "Left menu component (React.createElement)"),
      this.props.children
    );
  }
}
