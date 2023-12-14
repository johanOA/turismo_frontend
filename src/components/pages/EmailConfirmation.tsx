import { useState } from 'react';
import { Envelope } from '@phosphor-icons/react';
import './../Styles/Register.css';
import httpClient from "../../config/httpClient.js";

function ResetPasswordComponent() {
    const [email, setEmail] = useState('');
    const [waitConfirmation, setWaitConfirmation] = useState(false);
    const [recoverPassword, setRecoverPassword] = useState(false);

    const sendVerificationEmail = async () => {
        try {
            const response = await httpClient.post("auth/generateResetPasswordToken", { email });
            setWaitConfirmation(true);
            if (response.data.success) {
                showRecoverPassword();
            } else {
                console.log("paila mamo");
            }
        } catch (error) {
            console.error('Error al hacer la solicitud:', error);
        }
    };

    const showRecoverPassword = () => {
        setRecoverPassword(true);
    }

    return (
        <div className='container-internal'>
            <div className="forms-container">
            {!waitConfirmation ? (
            <>
                <div className="input-field">
                    <div className='edge-input-icon' tabIndex={0}>
                        <Envelope className="icons-register"></Envelope>
                        <input
                            className='input-register'
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className='container-buton'>
                    <button onClick={() => sendVerificationEmail()} type="submit" className="btn_register">Enviar</button>
                </div>
            </>
            ) : (
                <>
                    {recoverPassword ? (
                        <div>Revisa el correo que acabas de ingresas</div>
                    ) : (
                        <div>Fallo en la confirmación del correo</div>
                    )}
                </>
            )}
            </div>
        </div>
    );
}
export default ResetPasswordComponent;