var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";

var TriviaGame = function (_Component) {
  _inherits(TriviaGame, _Component);

  function TriviaGame() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TriviaGame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TriviaGame.__proto__ || Object.getPrototypeOf(TriviaGame)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selected: "none",
      message: "test",
      streak: 0,
      questionID: 1,
      questions: [
      //format: quest. 1, 2, 3. answer
      ["Question 1?", "Option A", " Option B", " Option C", 1], ["Question 2?", "Option D", " Option E", " Option F", 2], ["Question 3?", "Option G", " Option H", " Option I", 3], ["Question 4?", "Option J", " Option K", " Option L", 1], ["Question 5?", "Option M", " Option N", " Option O", 2], ["Question 6?", "Option P", " Option R", " Option R", 3]]
    }, _this.handleOptionChange = function (changeEvent) {
      _this.setState({
        selected: changeEvent.target.value
      });
      console.log("Val: " + changeEvent.target.value);
      if (changeEvent.target.value == _this.state.questions[_this.state.questionID][4]) {
        _this.setState({
          message: "Correct!"
        });
        _this.setState({
          streak: _this.state.streak + 1
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
        _this.setState({
          message: "I'm sorry, but that's incorrect. The correct answer was " + _this.state.questions[_this.state.questionID][changeEvent.target.value] + ". "
        });
        _this.setState({
          streak: 0
        });
      }
      _this.setState({
        questionID: _this.getNewQuestion()
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TriviaGame, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          this.state.questions[this.state.questionID][0]
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-secondary btn-med m-5",
            onClick: this.handleOptionChange,
            value: "1"
          },
          this.state.questions[this.state.questionID][1]
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-secondary btn-med m-5",
            onClick: this.handleOptionChange,
            value: "2"
          },
          this.state.questions[this.state.questionID][2]
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-secondary btn-med m-5",
            onClick: this.handleOptionChange,
            value: "3"
          },
          this.state.questions[this.state.questionID][3]
        ),
        React.createElement(
          "div",
          { id: "streak" },
          "Current Streak: " + this.state.streak,
          " "
        ),
        React.createElement(
          "div",
          { id: "msg" },
          " ",
          this.state.message,
          "|"
        )
      );
    }
  }, {
    key: "getNewQuestion",
    value: function getNewQuestion() {
      var newQ = Math.floor(Math.random() * this.state.questions.length);
      console.log("New Question:" + newQ);
      return newQ;
    }
  }]);

  return TriviaGame;
}(Component);

export default TriviaGame;

var containerElement = document.getElementById("game");
ReactDOM.render(React.createElement(TriviaGame, null), containerElement);