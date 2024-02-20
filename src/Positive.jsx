export const Positive = ({ total, good }) => {
  let positive = (good / total) * 100;  
  return <p>Positiu {positive}%</p>;};
