import React, { Component } from "react";
import "./colorsGroup.css";

export default class ColorsGroup extends Component {

  handleButtonClick = () => {};

  render() {
    return (
      <div className="flagsGroupContainer">
        {this.props.colors.map((color) => (
          <div onClick={this.handleButtonClick} style={{ backgroundColor: color }} />
        ))}
      </div>
    );
  }
}
