import React, { Component } from 'react'
import quizQuestionsData from "../resources/quizQuestion.json";

export default class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      question: 'What temperature does water boil at?',
      optionA: '50 degrees Celsius',
      optionB: '25 degrees Celsius',
      optionC: '100 degrees Celsius',
      optionD: '150 degrees Celsius'
    };
  }

  renderNext = () => {
    if (this.state.currentIndex < 14) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      }, () => {
        this.renderQuestions();
      });
    }
  }

  renderPrev = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      }, () => {
        this.renderQuestions();
      });
    }
  }

  renderQuestions = () => {
    this.setState({
      question: quizQuestionsData[this.state.currentIndex].question,
      optionA: quizQuestionsData[this.state.currentIndex].optionA,
      optionB: quizQuestionsData[this.state.currentIndex].optionB,
      optionC: quizQuestionsData[this.state.currentIndex].optionC,
      optionD: quizQuestionsData[this.state.currentIndex].optionD
    });
  }

  renderQuit = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      this.setState({
        currentIndex: 0
      }, () => {
        this.renderQuestions();
      });
    }
  }

  render() {
    const questionsData = quizQuestionsData;
    console.log(questionsData);
    console.log(this.state.currentIndex);

    return (
      <div className='game'>
        <h1>Question</h1>
        <p>{this.state.currentIndex + 1} of 15</p>
        <p className='question'>{this.state.question}</p>

        <div className="options">
          <div className="option">{this.state.optionA}</div>
          <div className="option">{this.state.optionB}</div>
          <div className="option">{this.state.optionC}</div>
          <div className="option">{this.state.optionD}</div>
        </div>

        <div className="btns">
          <button className='prev' onClick={() => this.renderPrev()}>Previous</button>
          <button className='next' onClick={() => this.renderNext()}>Next</button>
          <button className='quit' onClick={() => this.renderQuit()}>Quit</button>
        </div>
      </div>
    );
  }
}
