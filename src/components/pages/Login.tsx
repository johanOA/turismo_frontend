import Image1 from "../../assets/Ilustracion.png";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Image } from "../atoms/Image";
import httpClient from "../../config/httpClient.js"; 
import "../Styles/Login.css";
import Popup from "../pages/utils/popup";
import { setUserToken, setUserInfo } from "../../localStorage/localStorage.js";
import {User, Key, EyeClosed, Eye} from '@phosphor-icons/react';

export default function Login() {
  const navigate = useNavigate();
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (idNumber && password) {
      httpClient.post("auth/login", { idNumber, password })
        .then((response) => {
          if (response.data.success) {
            let nameUser = response.data.data.username;
            setUserInfo(nameUser);
            let responseUserInfo = response.data.data.token;
            setUserToken(responseUserInfo);
            navigate('/');
          } else {
            setPopupMessage("Usuario o contraseña incorrecta");
            setShowPopup(true);
          }
        })
        .catch((error) => {
          console.error('Error al hacer la solicitud:', error);
          setPopupMessage("Error al conectar con el servidor");
          setShowPopup(true);
        });
    } else {
      setPopupMessage("Por favor, rellene todos los campos");
      setShowPopup(true);
    }
  }
 
  const closePopup = () => {
    setShowPopup(false);
  }
 
  const handleShowPasswordToggle = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
      <div className="login-container">
        <section className="login-section">
          <div className="background-image">
            <Image className="h-full w-full object-cover" image={Image1} alt="Hero Background Vector" />
          </div>
          <main className="main">
            <div className="login-content">
              <h1 className="login-title">Login</h1>
              <form className="login-form" onSubmit={handleSubmit}>
                <label className="label-login">Numero de Identidad</label>
                <div className="input-field-login">
                  <div className='edge-input-icon-login'>
                    <User className="icons-login"></User>
                    <input 
                    type="text" 
                    value={idNumber} 
                    onChange={(e) => setIdNumber (e.target.value )} 
                    className="login-input" 
                    placeholder="Numero de Identidad" 
                    />
                  </div>
                </div>
                <label className="label-login">Contraseña</label>
                <div className="input-field-login">
                  <div className='edge-input-icon-login'>
                    <Key className="icons-login"></Key>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="login-input"
                      placeholder="Ingresa tu contraseña"
                    />
                    <button onClick={handleShowPasswordToggle}>
                      {showPassword ?                     
                        <EyeClosed className="icons-login"></EyeClosed>
                        : 
                        <Eye className="icons-login"></Eye>
                        }
                    </button>
                  </div>
                  <a href="#" className="password-option">¿Olvidaste tu contraseña?</a>
                </div>
                <a className="login-button" onClick={handleSubmit}>Login</a>
                <Popup
                  isOpen={showPopup}
                  onClose={closePopup}
                  title="Error"
                  message={popupMessage}
                />
              </form>
              <div className="form-group">
                <div className="register-option">¿Aún no tienes una cuenta? 
                  <a href="/Register" className="link"> Clic aquí</a>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
  );
}