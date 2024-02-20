// Aquest és un component de React anomenat Counter
// Aquest component rep dues props: 'counter' i 'name'
export const Counter = ({ counter, name }) => {
  // Retorna un element de JSX que mostra el valor de 'name' seguit del valor de 'counter' dins d'un paràgraf
  return (
      <p>
          {name} {counter}
      </p>
  );
};
