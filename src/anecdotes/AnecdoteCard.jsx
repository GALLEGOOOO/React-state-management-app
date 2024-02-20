export const AnecdoteCard = ({ title, children }) => {
  return (
    <div className="subsection">
      <h3 className="subsection__header">{title}</h3>
      {children}
    </div>
  );
};
