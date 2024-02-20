import { useState } from "react";
import { Statistics } from "./Statistics.jsx";
import { Button } from "./Button.jsx";

// Definició del component App
const App = () => {
  // Definició dels estats inicials
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selectedAnecdote, setAnecdote] = useState(0);
  const anecdotes = [
    // Array que conté diferents anècdotes
    // (Per brevetat, només s'han inclòs algunes)
  ];
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotes, setMostVotes] = useState(0);

  // Funcions per incrementar el comptador de feedbacks positius, neutres i negatius
  const handleIncrementGood = () => {
    setGood((prevGood) => prevGood + 1);
  };
  const handleIncrementNeutral = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
  };
  const handleIncrementBad = () => {
    setBad((prevBad) => prevBad + 1);
  };

  // Funció per seleccionar una anècdota aleatòria
  const handleRandom = () => {
    setAnecdote(() => Math.floor(Math.random() * anecdotes.length));
  };

  // Funció per votar una anècdota
  const handleVote = () => {
    const updatedVotes = votes.map((vote, index) =>
      index === selectedAnecdote ? vote + 1 : vote
    );
    setVotes(updatedVotes);
  };

  // Funció per trobar l'anècdota amb més vots
  const handleMostVotes = () => {
    let mostVoted = 0;
    for (let index = 0; index < votes.length; index++) {
      if (votes[index] > votes[mostVoted]) {
        mostVoted = index;
      }
    }
    setMostVotes(mostVoted);
  };

  // Càlcul del total de feedbacks i el resultat acumulat
  let total = good + neutral + bad;
  let result = good - bad;

  // Renderització del component
  return (
    <div>
      <div>
        {/* Secció per a deixar el feedback */}
        <h1>donar feedback</h1>
        <Button callback={handleIncrementGood} text={"positiu"} />
        <Button callback={handleIncrementNeutral} text={"neutre"} />
        <Button callback={handleIncrementBad} text={"negatiu"} />

        {/* Secció d'estadístiques */}
        <h1>estadístiques</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          result={result}
        />
      </div>

      <div>
        {/* Secció per a mostrar una anècdota aleatòria */}
        <h1>Anècdota del dia</h1>
        <p>{anecdotes[selectedAnecdote]}</p>
        <p>te {votes[selectedAnecdote]} vots</p>
        <button onClick={() => {
            handleVote();
            handleMostVotes();
          }}>
          votar
        </button>
        <button onClick={handleRandom}>següent anècdota</button>
      </div>

      <div>
        {/* Secció per a mostrar l'anècdota amb més vots */}
        <h1>Anècdota amb més vots</h1>
        <p>{anecdotes[mostVotes]}</p>
        <p>te {votes[mostVotes]} vots</p>
      </div>
    </div>
  );
};

export default App; // Exportació del component App
