import React from "react";

import '../styles/boton.css'

const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
};

function Boton (props) {
    return (
        <div
            className={ `boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarBoton(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton