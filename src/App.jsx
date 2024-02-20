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
      <main className="main">
        <section className="section">
          <SectionHeader text="give feedback" />
          <ButtonSet>
            <Button
              label="good"
              handleUpdate={handleIncreaseGood}
              level="success"
            />
            <Button
              label="neutral"
              handleUpdate={handleIncreaseNeutral}
              level="secondary"
            />
            <Button
              label="bad"
              handleUpdate={handleIncreaseBad}
              level="danger"
            />
          </ButtonSet>
          <Statistics
            statistics={statistics}
            shouldRenderStatistics={shouldRenderStatistics({ totalFeedback })}
          />
        </section>
        <section className="section">
          <SectionHeader text="anecdotes" />
          <AnecdoteCard title="Anecdote of the day">
            <Anecdote content={anecdotes[selected]} votes={voted[selected]} />
            <ButtonSet>
              <Button
                label="Vote"
                handleUpdate={handleUpdateVotes}
                level="success"
              />
              <Button
                label="Next"
                handleUpdate={handleRandomAnecdote}
                level="secondary"
              />
            </ButtonSet>
          </AnecdoteCard>
          <AnecdoteCard title="Anecdote with most votes">
            <Anecdote content={mostVotedAnecdote} votes={maxVoteValue} />
          </AnecdoteCard>
        </section>
      </main>
    </>
  );
};

export default App;
