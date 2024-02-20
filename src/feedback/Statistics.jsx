import { StatisticsTable } from "./StatisticsTable";

export const Statistics = ({ statistics, shouldRenderStatistics }) => {
  return (
    <>
      <h3>statistics</h3>

      {!shouldRenderStatistics && <p>No feedback given</p>}

      {shouldRenderStatistics && <StatisticsTable statistics={statistics} />}
    </>
  );
};
