import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = nameState => {
    return this.setState(prevState => {
      return { [nameState]: Number(prevState[nameState]) + 1 };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (
      (good * 100) /
      (good + neutral + bad === 0 ? 1 : good + neutral + bad)
    ).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const arrFeedback = ['Good', 'Neutral', 'Bad'];
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            arrFeedback={arrFeedback}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
