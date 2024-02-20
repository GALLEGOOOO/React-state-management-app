export const Button = ({ label, handleUpdate, level }) => {
  return (
    <button className={`button bg-${level}`} onClick={handleUpdate}>
      {label}
    </button>
  );
};
