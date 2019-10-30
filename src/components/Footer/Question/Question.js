import React, { Component } from "react";

import classes from "./Question.module.css";

import plusLogo from "../../../assets/images/questionPage/plus-solid.svg";
import minusLogo from "../../../assets/images/questionPage/minus-solid.svg";

import axios from "axios";

class Question extends Component {
  state = {
    questions: [],
    ariaExpanded: false,
    selectedTitle: null
  };

  componentDidMount() {
    axios.get("http://localhost:4000/qustionPage").then(response => {
      this.setState({ questions: response.data });
    });
  }

  questionHandler = title => {
    this.setState(prevState => {
      return {
        ariaExpanded: !prevState.ariaExpanded,
        selectedTitle: this.state.selectedTitle === title ? null : title
      };
    });
  };

  render() {
    const { questions, ariaExpanded, selectedTitle } = this.state;

    return (
      <article className={classes.Question}>
        <h1>Qustions</h1>
        <dl>
          {questions.map(ques => {
            return (
              <dt
                onClick={() => this.questionHandler(ques.question)}
                key={ques.id}
              >
                {ques.question}
                {ariaExpanded && selectedTitle === ques.question ? (
                  <>
                    <img src={minusLogo} alt="minus-logo" />

                    <dd>
                      <p>{ques.answer}</p>
                    </dd>
                  </>
                ) : (
                  <img src={plusLogo} alt="plus-logo" />
                )}
              </dt>
            );
          })}
        </dl>
      </article>
    );
  }
}

export default Question;
