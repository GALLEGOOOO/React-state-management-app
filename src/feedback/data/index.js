const goodStatistic = (good) => ({
  label: "good",
  value: good,
});

const neutralStatistic = (neutral) => ({
  label: "neutral",
  value: neutral,
});

const badStatistic = (bad) => ({
  label: "bad",
  value: bad,
});

const allStatistic = (totalFeedback) => ({
  label: "all",
  value: totalFeedback,
});

const totalAverageStatistic = (totalAverage) => ({
  label: "average",
  value: totalAverage,
});

const positiveAverageStatistic = (positiveAverage) => ({
  label: "positive",
  value: positiveAverage,
});

export const statisticsData = {
  goodStatistic,
  neutralStatistic,
  badStatistic,
  allStatistic,
  totalAverageStatistic,
  positiveAverageStatistic,
};
