import { StatisticLine } from "./StatisticLine";
export const Statistics = ({ good, neutral, bad, total, result }) => {
  
  if (total === 0) {
    return <p>no feedback given</p>;
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} /> // Mostra el nombre de feedbacks positius
        <StatisticLine text="neutral" value={neutral} /> // Mostra el nombre de feedbacks neutres
        <StatisticLine text="bad" value={bad} /> // Mostra el nombre de feedbacks negatius
        <StatisticLine text="all" value={total} /> // Mostra el total de feedbacks rebuts
        <StatisticLine text="average" value={result / total} /> // Mostra la mitjana dels feedbacks
        <StatisticLine text="positive" value={`${(good / total) * 100} %`} /> // Mostra el percentatge de feedbacks positius
      </tbody>
    </table>
  );
};
