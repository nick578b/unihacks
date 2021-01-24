import React, { Component } from "react";

class TriviaGame extends Component {
  state = {
    selected: "none",
    message: "test",
    streak: 0,
    questionID: 1,
    questions: [
      //format: quest. 1, 2, 3. answer
      ["Question 1?", "Option A", " Option B", " Option C", "1"],
      ["Question 2?", "Option D", " Option E", " Option F", "2"],
      ["Question 3?", "Option G", " Option H", " Option I", "3"],
      ["Question 4?", "Option J", " Option K", " Option L", "1"],
      ["Question 5?", "Option M", " Option N", " Option O", "2"],
      ["Question 6?", "Option P", " Option R", " Option R", "3"],
    ],
  };

  render() {
    return (
      <div>
        <h3>{this.state.questions[this.state.questionID][0]}</h3>

        <button
          className="btn btn-secondary btn-med m-5"
          onClick={this.handleOptionChange}
          value="1"
        >
          {this.state.questions[this.state.questionID][1]}
        </button>

        <button
          className="btn btn-secondary btn-med m-5"
          onClick={this.handleOptionChange}
          value="2"
        >
          {this.state.questions[this.state.questionID][2]}
        </button>

        <button
          className="btn btn-secondary btn-med m-5"
          onClick={this.handleOptionChange}
          value="3"
        >
          {this.state.questions[this.state.questionID][3]}
        </button>

        <div id="streak">{"Current Streak: " + this.state.streak} </div>
        <div id="msg"> {this.state.message}|</div>
      </div>
    );
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selected: changeEvent.target.value,
    });
    console.log("Val: " + changeEvent.target.value);
    if (
      changeEvent.target.value == this.state.questions[this.state.questionID][4]
    ) {
      this.setState({
        message: "Correct!",
      });
      this.setState({
        streak: this.state.streak + 1,
      });
    } else {
      /*
        alert(
        "I'm sorry, but that's incorrect. The correct answer was " +
          this.state.questions[this.state.questionID][
            changeEvent.target.value
          ] +
          ". "
        );
      */
      this.setState({
        message:
          "I'm sorry, but that's incorrect. The correct answer was " +
          this.state.questions[this.state.questionID][
            changeEvent.target.value
          ] +
          ". ",
      });
      this.setState({
        streak: 0,
      });
    }
    this.setState({
      questionID: this.getNewQuestion(),
    });
  };

  getNewQuestion() {
    let newQ = Math.floor(Math.random() * this.state.questions.length);
    console.log("New Question:" + newQ);
    return newQ;
  }
}

export default Counter;
