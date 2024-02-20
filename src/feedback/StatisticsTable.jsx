import { StatisticLine } from "./StatisticLine";

export const StatisticsTable = ({ statistics }) => {
  return (
    <table className="statistics__table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {statistics.map((statistic) => {
          const { label, value } = statistic;
          return <StatisticLine key={label} label={label} value={value} />;
        })}
      </tbody>
    </table>
  );
};
