import React, { Component } from "react";
import "./questionQuiz.css"

export default class QuestionQuiz extends Component {
  render() {
    return (
      <div>
        <label>Seleccione los colores de la bandera del siguiente país:</label>
        <h2>{this.props.countryQuiz.name}</h2>
      </div>
    );
  }
}
