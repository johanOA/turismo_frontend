import Modal from 'react-modal';
import { useState } from "react";

export default function popup() {

const [mostrarIncorrecto, setMostrarIncorrecto] = useState(true);
const [mostrarCorrecto, setMostrarCorrecto] = useState(true);

return (
    <>
    {/* Modal de inicio de sesión incorrecto */}
    <Modal isOpen={mostrarIncorrecto} contentLabel="Inicio de sesión incorrecto" className="incorrect-login">
        <h2>Inicio de sesión incorrecto</h2>
        <button className= "login-button" onClick={() => setMostrarIncorrecto(false)}>Cerrar</button>
    </Modal>

    {/* Modal de inicio de sesión correcto */}
    <Modal
        isOpen={mostrarCorrecto}
        contentLabel="Inicio de sesión correcto"
        className="successful-login"
    >
        <h2>Inicio de sesión correcto</h2>
        {/* Mensaje de éxito u otra información */}
        <button onClick={() => setMostrarCorrecto(false)}>Cerrar</button>
    </Modal>
    </>
    );
}
