export const Anecdote = ({ content, votes }) => {
  return (
    <div className="subsection__container subsection__container--bottom">
      <p className="subsection__anecdote">{content}</p>
      <p className="subsection__tag">{`${votes} ${
        votes === 1 ? "vote" : "votes"
      }`}</p>
    </div>
  );
};
