import React from "react";
import { Component } from "react";

export default class ClassDemo extends Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }

  increase = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="section">
        <div className="title">Class Component Example</div>
        <p>Clicks: {this.state.clicks}</p>
        <button className="btn" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}
