import React, { Component } from "react";
import Order from "./order";
import Steps from "./steps";

import "./app.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: 0,
      summary: false,
    };
  }

  handleCourse = (course = 0) => {
    this.setState({ course });
  };

  handleSummary = () => {
    this.setState({ summary: !this.state.summary });
  };

  render() {
    return (
      <main className="app container-fluid">
        <h1 className="title">
          {this.state.summary ? "Your order: " : "RESTAURANT MENU"}
        </h1>
        <Steps
          {...this.state}
          changeCourse={this.handleCourse}
          summaryHandler={this.handleSummary}
          className="container-fluid"
        />
        <Order
          {...this.state}
          changeCourse={this.handleCourse}
          summaryHandler={this.handleSummary}
        />
      </main>
    );
  }
}
