// Aquesta és una funció de component de React anomenada StatisticLine
// Rep dos paràmetres: 'text' que representa el text de l'estadística i 'value' que representa el valor de l'estadística
export const StatisticLine = ({ text, value }) => {
  // Retorna una fila de taula (element 'tr' de HTML) que conté dues cel·les (elements 'td' de HTML):
  //   - La primera cel·la mostra el text de l'estadística seguit d'un dos punts (':')
  //   - La segona cel·la mostra el valor de l'estadística
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};
  