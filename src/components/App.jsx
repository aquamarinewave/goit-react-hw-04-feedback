import { useState } from 'react';
import css from './App.module.css';
import Section from './Section/Section'
import FeedbackOptions  from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'good': setGood(prevState => prevState + 1);
        break;
      case 'neutral': setNeutral(prevState => prevState + 1);
        break;
      case 'bad': setBad(prevState => prevState + 1);
        break;
      default: 
        break;
    }
  }

  const sumFeedbacks =  good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    return (good === 0 && sumFeedbacks === 0) ? 0 : Math.round(good / sumFeedbacks * 100);
  } 

    return (
      <div className={css.container} >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}>
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {sumFeedbacks !== 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={sumFeedbacks}
            positivePercentage={countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"></Notification>}
         </Section>
      </div>
    );
  }

export default App;
