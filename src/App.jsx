import { useState } from "react";
import { Statistics } from "./Statistics.jsx";
import { Button } from "./Button.jsx";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selectedAnecdote, setAnecdote] = useState(0);
  const anecdotes = [
    "During a coding competition, one participant declared proudly, 'If it hurts, do it more often.' Little did he know, his strategy of brute-forcing solutions led to more errors than success.",
    "In the midst of a software project deadline, a manager exclaimed, 'Adding manpower to a late software project makes it later!' The team soon realized that coordination, not just additional hands, was crucial for success.",
    "A developer once joked, 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' The team laughed, knowing all too well the truth in that statement.",
    "Amidst a heated debate about coding styles, a seasoned programmer quipped, 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' The room fell silent as they pondered the wisdom in simplicity.",
    "During a code review session, a mentor cautioned, 'Premature optimization is the root of all evil.' The team nodded, realizing the importance of prioritizing readability and maintainability over premature efficiency.",
    "In the midst of a debugging session, a frustrated developer sighed, 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' The team chuckled, relating to the struggles of unraveling complex logic.",
    "A senior engineer once remarked, 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.' The team nodded, understanding the importance of logging for debugging and understanding code flow.",
    "During a sprint retrospective, a team lead reflected, 'The only way to go fast is to go well.' The team nodded in agreement, realizing that rushing through tasks often leads to more setbacks than progress."
];
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotes, setMostVotes] = useState(0);

  const handleIncrementGood = () => {
    setGood((prevGood) => {
      prevGood = prevGood + 1;
      return prevGood;
    });
  };
  const handleIncrementNeutral = () => {
    setNeutral((prevNeutral) => {
      prevNeutral = prevNeutral + 1;
      return prevNeutral;
    });
  };
  const handleIncrementBad = () => {
    setBad((prevBad) => {
      prevBad = prevBad + 1;
      return prevBad;
    });
  };
  const handleRandom = () => {
    setAnecdote((prevAnecdote) => {
      prevAnecdote = Math.floor(Math.random() * anecdotes.length);
      return prevAnecdote;
    });
  };
  const handleVote = () => {
    const updatedVotes = votes.map((vote, index) =>
      index === selectedAnecdote ? vote + 1 : vote
    );
    setVotes(updatedVotes);
  };
  const handleMostVotes = () => {
    let mostVoted = 0;
    for (let index = 0; index < votes.length; index++) {
      if (votes[index] > votes[mostVoted]) {
        mostVoted = index;
      }
    }
    setMostVotes(mostVoted);
  };

  let total = good + neutral + bad;
  let result = good - bad;
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button callback={handleIncrementGood} text={"good"} />
        <Button callback={handleIncrementNeutral} text={"neutral"} />
        <Button callback={handleIncrementBad} text={"bad"} />
        <h1>statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          result={result}
        />
      </div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selectedAnecdote]}</p>
        <p>has {votes[selectedAnecdote]} votes</p>
        <button
          onClick={() => {
            handleVote();
            handleMostVotes();
          }}
        >
          vote
        </button>
        <button onClick={handleRandom}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVotes]}</p>
        <p>has {votes[mostVotes]} votes</p>
      </div>
    </div>
  );
};

export default App;