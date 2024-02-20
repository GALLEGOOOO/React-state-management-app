import { StatisticLine } from "./StatisticLine"; // Importa el component 'StatisticLine' des d'un altre arxiu
export const Statistics = ({ good, neutral, bad, total, result }) => {// Definició del component 'Statistics' que rep diverses propietats: good, neutral, bad, total i result
  
  if (total === 0) { // Comprovació si no s'ha donat cap feedback
    return <p>no feedback given</p>; // Retorna un missatge indicant que no s'ha donat cap feedback
  }
  
  return ( // Si s'ha rebut feedback, mostra les estadístiques en una taula
    <table>
      <tbody>
        <StatisticLine text="good" value={good} /> // Mostra el nombre de feedbacks positius
        <StatisticLine text="neutral" value={neutral} /> // Mostra el nombre de feedbacks neutres
        <StatisticLine text="bad" value={bad} /> // Mostra el nombre de feedbacks negatius
        <StatisticLine text="all" value={total} /> // Mostra el total de feedbacks rebuts
        <StatisticLine text="average" value={result / total} /> // Mostra la mitjana dels feedbacks
        <StatisticLine text="positive" value={`${(good / total) * 100} %`} /> // Mostra el percentatge de feedbacks positius
      </tbody>
    </table>
  );
};
