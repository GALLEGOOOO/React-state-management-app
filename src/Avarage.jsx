// Aquest és un component de React anomenat Average
export const Average = ({ total, result }) => {
  // Es calcula la mitjana dividint el resultat pel total
  let average = result / total;
  // Es retorna un element de JSX que mostra la mitjana dins d'un paràgraf
  return <p>mitjana {average}</p>;
};
