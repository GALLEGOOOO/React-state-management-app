/**
 * Get data for the most voted anecdote.
 *
 * @param {Object} options - The options object.
 * @param {number[]} options.votesCollection - Array of vote values.
 * @param {string[]} options.anecdotesCollection - Array of anecdote data.
 *
 * @returns {Object} - Object containing data for the most voted anecdote.
 * @property {string} mostVotedAnecdote - The most voted anecdote.
 * @property {number} maxVoteValue - The maximum vote value.
 */

export const getMostVotedAnecdoteData = ({
  votesCollection,
  anecdotesCollection,
}) => {
  const maxVoteValue = Math.max(...votesCollection);
  const index = votesCollection.indexOf(maxVoteValue);

  return {
    mostVotedAnecdote: anecdotesCollection[index],
    maxVoteValue,
  };
};
