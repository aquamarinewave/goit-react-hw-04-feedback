import { Component } from 'react';
import css from './App.module.css';
import Section from './Section/Section'
import FeedbackOptions  from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (event) => {
    const { name } = event.currentTarget;
    this.setState(prevstate => ({
      [name]: prevstate[name] + 1,
    }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return (this.state.good === 0 && total === 0) ? 0 : Math.round(this.state.good / total * 100);
  }


  render() {
    
    const totalFeedbacks = this.countTotalFeedback();

    return (
      <div className={css.container} >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}>
          </FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalFeedbacks !== 0 ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedbacks}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"></Notification>}
         </Section>
      </div>
    );
  }
}


export default App;
