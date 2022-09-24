import React, { Component } from "react";
import ColorsGroup from "./colorsGroup";
import ButtonQuiz from "./buttonQuiz";
import "./quizWindow.css";
import flags from "./flag-colors.json";
import QuestionQuiz from "./questionQuiz";

const numberCountries = 196;
const numberColorFlags = 12;

export default class QuizWindow extends Component {
  getRandomInt = (max) => Math.floor(Math.random() * max);

  getCountryQuiz = () => flags[this.getRandomInt(numberCountries)];

  getRandomColors = () => {
    let randomColors = [];
    let randomColor;
    let country;

    for (let i = 0; i < numberColorFlags; i++) {
      country = flags[this.getRandomInt(numberCountries)];
      randomColor =
        country.colors[this.getRandomInt(country.colors.length)].hex;
      randomColors.push(randomColor);
    }

    return randomColors;
  };

  render() {
    return (
      <div className="quizGrid">
        <QuestionQuiz countryQuiz={this.getCountryQuiz()} />
        <ColorsGroup colors={this.getRandomColors()} />
        <ButtonQuiz text="Aceptar" />
      </div>
    );
  }
}
