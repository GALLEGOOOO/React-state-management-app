/**
 *
 * @param {Object} options - The options object
 * @param {number} options.good - The number of positive feedback
 * @param {number} options.bad - The number of negative feedback
 * @param {number} options.totalFeedback - Total feedback
 *
 * @returns {string} - Total average
 *
 * @example
 *  // Example usage:
 * const result = calculateTotalAverage({ good: 10, bad: 1, totalFeedback: 12 });
 * // result is 0.75
 */
export const calculateTotalAverage = ({ good, bad, totalFeedback }) => {
  const goodFeedback = good;
  const badFeedback = bad * -1;

  const ratedFeedback = goodFeedback + badFeedback;

  const totalAverage =
    ratedFeedback / totalFeedback
      ? (ratedFeedback / totalFeedback).toFixed(2)
      : "0";

  return totalAverage;
};
