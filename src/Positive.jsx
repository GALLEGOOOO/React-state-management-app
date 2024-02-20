// Aquest és un component de React anomenat Positive
export const Positive = ({ total, good }) => {
  // Calcula el percentatge de respostes positives dividint el nombre de respostes positives ('good') pel total de respostes ('total') i multiplicant per 100
  let positive = (good / total) * 100;  
  return <p>Positiu {positive}%</p>;  // Retorna un element de JSX que mostra el percentatge de respostes positives dins d'un paràgraf
};
