import React from "react";
import '../styles/btnClear.css'

const BotonClear = (props) => (
    <div className="boton-clear"
        onClick={() => props.manejarBoton()}>
        {props.children}
    </div>
);

export default BotonClear