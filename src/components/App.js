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

  handleIncrement = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
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
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </section>
    );
  }
}

export default App;
