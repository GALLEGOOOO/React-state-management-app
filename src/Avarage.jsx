export const Average = ({ total, result }) => {
  
  let average = result / total;
  return <p>mitjana {average}</p>;
};
