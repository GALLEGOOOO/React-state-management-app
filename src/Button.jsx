// Aquest és un component de React anomenat Button.
export const Button = ({ callback, text }) => {
    // Retorna un element de botó de JSX que executa la funció 'callback' quan es fa clic i mostra el text proporcionat.
    return (
        <button onClick={callback}>{text}</button>
    );
}
