import { useParams } from 'react-router-dom';
import './../Styles/Register.css';
import httpClient from "../../config/httpClient.js";
import { useEffect, useState } from 'react';

function ResetPasswordComponent() {

    const { token } = useParams();
    const [responde, setResponse] = useState(false);

    const sendVerificationEmail = () => {
        httpClient.post("auth/verifyEmail", {token: token})
        .then((response) => {
            if (response.data.success) {
                setResponse(true);
            } else {
                setResponse(false);
            }
        })
        .catch((error) => {
            console.error('Error al hacer la solicitud:', error);
        });
    };

    useEffect(() => {
        sendVerificationEmail();
     }, []);     

    return (
        <div className='container-internal'>
            <div className="forms-container">
                {responde ? (
                <>
                    <div>Correo verificado</div>
                </>
                ) : (
                    <div>El correo aún no está verificado o no existe</div>
                )}
            </div>
        </div>
    );
}
export default ResetPasswordComponent;