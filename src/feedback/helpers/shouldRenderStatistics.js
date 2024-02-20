/**
 *
 * @param {Object} options - The options object
 * @param {number} [  ] - The total number of feedback
 * @returns {boolean} - `true` if statistics should be rendered, otherwise `false`.
 *
 * @examnple
 *  // Example usage:
 * const shouldRender = shouldRenderStatistics({ totalFeedback: 1 });
 * // shouldRender is true
 */

export const shouldRenderStatistics = ({ totalFeedback } = {}) =>
  Boolean(totalFeedback);
