import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //метод подсчет всех голосов
  // countTotalFeedback() => { };

  //метод подсчет процентов
  // countPositiveFeedbackPercentage() = {};

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <section>
        <FeedbackOptions></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total="metod"
          positivePercentage="%"
        ></Statistics>
      </section>
    );
  }
}

export default App;
