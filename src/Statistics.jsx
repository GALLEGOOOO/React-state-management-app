import { StatisticsLine } from "./StatisticsLine.jsx";

export const Statistics = ({ good, neutral, bad, total, result }) => {
  if (total === 0) {
    return <p>no feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={result / total} />
        <StatisticsLine text="positive" value={`${(good / total) * 100} %`} />
      </tbody>
    </table>
  );
};