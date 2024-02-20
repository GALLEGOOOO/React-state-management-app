import { useState } from "react";
import { Anecdote, AnecdoteCard } from "./anecdotes";
import { anecdotes } from "./anecdotes/data";
import { getMostVotedAnecdoteData } from "./anecdotes/helpers";
import { initialVoteState } from "./anecdotes/state/initialVoteState";
import { Statistics } from "./feedback";
import { statisticsData } from "./feedback/data";
import {
  calculatePositiveAverage,
  calculateTotalAverage,
  shouldRenderStatistics,
} from "./feedback/helpers";
import { Button, ButtonSet, MainHeader, SectionHeader } from "./shared";

const App = () => {
  // feedback state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // anecdotes state
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(initialVoteState);

  // feedback handlers
  const totalFeedback = good + neutral + bad;

  const handleIncreaseGood = () => {
    setGood((prevTotal) => prevTotal + 1);
  };

  const handleIncreaseNeutral = () => {
    setNeutral((prevTotal) => prevTotal + 1);
  };

  const handleIncreaseBad = () => {
    setBad((prevTotal) => prevTotal + 1);
  };

  // feedback data
  const averageStatistic = calculateTotalAverage({ good, bad, totalFeedback });
  const positiveAverage = calculatePositiveAverage({ good, totalFeedback });

  const statistics = [
    statisticsData.goodStatistic(good),
    statisticsData.neutralStatistic(neutral),
    statisticsData.badStatistic(bad),
    statisticsData.allStatistic(totalFeedback),
    statisticsData.totalAverageStatistic(averageStatistic),
    statisticsData.positiveAverageStatistic(positiveAverage),
  ];

  // anecdotes handlers
  const handleRandomAnecdote = () => {
    const anecdotesRange = anecdotes.length;
    const index = Math.floor(Math.random() * anecdotesRange);

    setSelected(index);
  };

  const handleUpdateVotes = () => {
    setVoted((prevVotes) => {
      const nextVotes = [...prevVotes];
      nextVotes[selected] += 1;

      return nextVotes;
    });
  };

  // anecdotes data
  const { mostVotedAnecdote, maxVoteValue } = getMostVotedAnecdoteData({
    votesCollection: voted,
    anecdotesCollection: anecdotes,
  });

  return (
    <>
      <MainHeader text="React state management" />
      <main className="main-container">
  <section className="feedback-section">
    <h2 className="section-header">Give Feedback</h2>
    <div className="button-set">
      <button className="custom-button good-button" onClick={handleIncreaseGood}>Good</button>
      <button className="custom-button neutral-button" onClick={handleIncreaseNeutral}>Neutral</button>
      <button className="custom-button bad-button" onClick={handleIncreaseBad}>Bad</button>
    </div>
    <Statistics
      statistics={statistics}
      shouldRenderStatistics={shouldRenderStatistics({ totalFeedback })}
    />
  </section>
  <section className="anecdotes-section">
    <h2 className="section-header">Anecdotes</h2>
    <div className="anecdote-card">
      <h3 className="anecdote-title">Anecdote of the day</h3>
      <Anecdote content={anecdotes[selected]} votes={voted[selected]} />
      <div className="button-set">
        <button className="custom-button vote-button" onClick={handleUpdateVotes}>Vote</button>
        <button className="custom-button next-button" onClick={handleRandomAnecdote}>Next</button>
      </div>
    </div>
    <div className="anecdote-card">
      <h3 className="anecdote-title">Anecdote with most votes</h3>
      <Anecdote content={mostVotedAnecdote} votes={maxVoteValue} />
    </div>
  </section>
</main>

    </>
  );
};

export default App;
