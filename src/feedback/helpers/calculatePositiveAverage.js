/**
 * Calculates the positive average percentage based on the number of positive feedback and total feedback.
 *
 * @function
 * @param {Object} options - The options object.
 * @param {number} options.good - The number of positive feedback.
 * @param {number} options.totalFeedback - The total number of feedback.
 * @returns {string} - The positive average as a percentage string.
 *
 * @example
 * // Example usage:
 * const result = calculatePositiveAverage({ good: 25, totalFeedback: 50 });
 * // result is '50%'
 */

export const calculatePositiveAverage = ({ good, totalFeedback }) => {
  const total =
    (good * 100) / totalFeedback
      ? ((good * 100) / totalFeedback).toFixed(2)
      : "0";
  return `${total}%`;
};
