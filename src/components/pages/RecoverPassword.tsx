import { useState } from 'react';
import { Eye, EyeClosed, Key } from '@phosphor-icons/react';
import { useNavigate, useParams } from 'react-router-dom';
import './../Styles/Register.css';
import httpClient from "../../config/httpClient.js";
import Popup from "../pages/utils/popup";

function ResetPasswordComponent() {

    const [showPassword, setShowPassword] = useState(false);
    const [navigateLogin, setNavigateLogin] = useState(false);
    const [password, setPassword] = useState("");
    const [popupMessage, setPopupMessage] = useState("");
    const [popupTitle, setPopupTitle] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();

    const sendVerificationEmail = () => {
        if (password !== passwordConfirmation) {
            setPopupTitle("Error")
            setPopupMessage("Las contraseñas no coinciden");
            setShowPopup(true);
        }else if(password == "")
            {
                setPopupTitle("Error")
                setPopupMessage("Por favor, rellene todos los campos");
                setShowPopup(true);
            }else if(password.length >= 8)
                {
                    httpClient.post("auth/resetPassword", {token: token, newPassword: password})
                    .then((response) => {
                        if (response.data.success) {
                            setPopupTitle("Exito")
                            setPopupMessage("La contraseña se reestableció con exito");
                            setShowPopup(true);
                            setNavigateLogin(true)         
                        } else {
                            setPopupTitle("Error")
                            setPopupMessage("Error con el servidor, intente más tarde");
                            setShowPopup(true);                        }
                    })
                    .catch((error) => {
                        setPopupTitle("Error")
                        setPopupMessage("'Error con el servidor, intente más");
                        setShowPopup(true);   
                    });
            }else{
                setPopupTitle("Error")
                setPopupMessage("La contraseña debe de tener minimo 8 caracteres");
                setShowPopup(true);
            };
    };     

    const handleShowPasswordToggle = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }
    const closePopup = () => {
        setShowPopup(false);
    }
    const handleNavigate = () => {
        navigate('/');
       }      

    return (
        <div className='container-internal'>
            <div className="forms-container">
            {navigateLogin && (
                <>
                    <div>Correo verificado</div>
                        <div className='container-buton'>
                        <button onClick={handleNavigate}>BOTON</button>
                    </div>
                </>
            )}
                <div className="input-field">
                    <div className='edge-input-icon' tabIndex={0}>
                    <Key className="icons-register"></Key>
                    <input
                        className='input-register'
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={8}
                        required
                    />
                    <button onClick={handleShowPasswordToggle}>
                        {showPassword ?                     
                        <EyeClosed className="icons-login"></EyeClosed>
                            : 
                        <Eye className="icons-login"></Eye>
                        }
                    </button>
                    </div>
                </div>
                <div className="input-field">
                    <div className='edge-input-icon' tabIndex={0}>
                    <Key className="icons-register"></Key>
                    <input
                        className='input-register'
                        type={showPassword ? 'text' : 'password'}
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        placeholder="Confirma tu Contraseña"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        minLength={8}
                        required
                    />
                    <button onClick={handleShowPasswordToggle}></button>
                    </div>
                </div>
                <div className='container-buton'>
                    <button onClick={() => sendVerificationEmail()} type="submit" className="btn_register">Enviar</button>
                </div>
                <Popup
                  isOpen={showPopup}
                  onClose={closePopup}
                  title={popupTitle}
                  message={popupMessage}
                />
            </div>
        </div>
    );
}
export default ResetPasswordComponent;