import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    //  console.log('нажимаю на кнопку  good');
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    //  console.log('нажимаю на кнопку  neutral');
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    //  console.log('нажимаю на кнопку bad');
  };

  render() {
    const { good, neutral, bad } = this.state;
    // подсчет всех голосов
    const countTotalFeedback = good + neutral + bad;
    // подсчет процентов положительных отзывов
    const countPositiveFeedbackPercentage = (
      (good / countTotalFeedback) *
      100
    ).toFixed(0);

    return (
      <section>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={this.handleIncrementGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
          <Notification message="There is no feedback" />
        </SectionTitle>
      </section>
    );
  }
}

export default App;
