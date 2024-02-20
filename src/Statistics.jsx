import { StatisticLine } from "./StatisticLine";
export const Statistics = ({ good, neutral, bad, total, result }) => {
  
  if (total === 0) {
    return <p>no feedback given</p>;
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={result / total} />
        <StatisticLine text="positive" value={`${(good / total) * 100} %`} />
      </tbody>
    </table>
  );
};
