import React, { useState } from 'react';
import {User, Envelope, MapPinLine, IdentificationCard, Phone, Key, Buildings, EyeClosed, Eye, ArrowArcLeft, GlobeHemisphereWest, Desktop } from '@phosphor-icons/react';
import './../Styles/Register.css';
import MyMap from "./../maps/Maps.jsx"
import httpClient from "../../config/httpClient.js"; 
import Popup from "../pages/utils/popup";
import { useNavigate } from 'react-router-dom';

function RegistroComponent() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    idNumber: '',
    names: '',
    lastNames: '',
    address: '',
    phoneNumber: '',
  });

  const [microSite, setMicroSite] = useState({
    ventureAddress: '',
    ventureDescription: '',
    ventureMapLatitude: '',
    ventureMapLongitude: '',
    ventureName: '',
    microSiteDescription: '',
    micrositeName: '',
  });

  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);
  const [showFields, setShowFields] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [, setShowExplanation] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Nuevo estado para mostrar el popup
  const [popupMessage, setPopupMessage] = useState(""); // Mensaje de error del popup
  const [, setUserData] = useState({});
  const [, setMicroSiteData] = useState({});
  const [completeRegistration, setCompleteRegistration] = useState(false);
  const navigate = useNavigate();

  const handleRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const userInfoData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      passwordConfirmation: formData.get('passwordConfirmation') as string,
      idNumber: formData.get('idNumber') as string,
      names: formData.get('names') as string,
      lastNames: formData.get('lastNames') as string,
      address: formData.get('address') as string,
      phoneNumber: formData.get('phoneNumber') as string,
    };
    const microSiteData = {
      ventureAddress: formData.get('ventureAddress') as string,
      ventureDescription: formData.get('ventureDescription') as string,
      ventureMapLatitude: formData.get('ventureMapLatitude') as string,
      ventureMapLongitude: formData.get('ventureMapLongitude') as string,
      ventureName: formData.get('ventureName') as string,
      microSiteDescription: formData.get('microSiteDescription') as string,
      micrositeName: formData.get('micrositeName') as string,
      };
  
      if (showUserPanel) {
        setUserData(userInfoData);
      } else {
        setMicroSiteData(microSiteData);
      }
  
      if (userInfoData.password === userInfoData.passwordConfirmation) {
        setIsPasswordsMatch(true);
        const userInfo = showUserPanel ? userInfoData : {...userInfoData, address: microSiteData.ventureAddress };
        const requestPayload = showUserPanel ? {userInfo: userInfo} : { userInfo: userInfo, microSite: microSiteData };
      
      httpClient.post("user/register", requestPayload)
        .then((response) => {
          if (response.data.success) {
            showEmailVerification();
          } 
          else {
            setPopupMessage("Error en el registro"); // Mensaje de error para el registro
            setShowPopup(true);
          }
        })
        .catch((error) => {
          setPopupMessage("Error en el registro"); // Mensaje de error para el registro
          setShowPopup(true);
        });
    } else {
      setPopupMessage("Las contraseñas no coinciden"); // Mensaje de error para el registro
      setShowPopup(true);
      setIsPasswordsMatch(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  }
  
 const showFieldsForUser = () => {
    setShowFields(true);
    setShowUserPanel(true);
    setShowExplanation(false);
  };

  const showFieldsForCompany = () => {
    setShowFields(true);
    setShowUserPanel(false);
    setShowExplanation(false);
  };

  const handleShowPasswordToggle = (event: { preventDefault: () => void; }) => {
    setShowPassword(!showPassword);
    event.preventDefault();
   };

   const showSelection = () => {
    setShowFields(false);
    setShowExplanation(true);
  };

  // Esta función se encarga de actualizar las coordenadas en el estado
  const handleCoordinateChange = ({ lat, lng }: { lat: string; lng: string }) => {
    setMicroSite((prevMicroSite) => ({
      ...prevMicroSite,
      ventureMapLongitude: lng,
      ventureMapLatitude: lat,
    }));
  };

const showEmailVerification = () => {
  setCompleteRegistration(true);
}

const handleNavigate = () => {
  navigate('/');
 }

  return (
      <div className='container-internal'>
        <div className="forms-container">
          <>
          {showFields ? (
            <div className='container-buton'>
              <button onClick={showFieldsForUser} className="btn_register">Registro para Usuarios</button>
              <button onClick={showFieldsForCompany} className="btn_register">Registro de Emprendimientos</button>
            </div>
          ) : (
            <>
            {!completeRegistration ? (
              <>
              <div>Revisa el correo que acabas de ingresas</div>
              <div className='container-buton'>
                <button onClick={handleNavigate}>BOTON</button>
              </div>
              </>
            ) : (
              <form onSubmit={handleRegistro}>
                <div className='container-buton-back flex'>
                  <button type="button" onClick={showSelection} className="btn-register-back">
                    <ArrowArcLeft className="icons-register-back"></ArrowArcLeft>
                  </button>
                  <label className='title'>Registro</label>
                </div>
                {/* Campos para userInfo */}
                <div className="input-field">
                  <div className='edge-input-icon'>
                    <User className="icons-register"></User>
                    <input
                      className='input-register'
                      type="text"
                      id="names"
                      name="names"
                      placeholder="Nombres"
                      value={userInfo.names}
                      onChange={(e) => setUserInfo({ ...userInfo, names: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <User className="icons-register"></User>
                    <input
                      className='input-register'
                      type="text"
                      id="lastNames"
                      name="lastNames"
                      placeholder="Apellidos"
                      value={userInfo.lastNames}
                      onChange={(e) => setUserInfo({ ...userInfo, lastNames: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <Envelope className="icons-register"></Envelope>
                    <input
                    className='input-register'
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                {showUserPanel && ( /*Para que se muestre sólo con los usuarios */
                  <div className="input-field">
                    <div className='edge-input-icon' tabIndex={0}>
                      <MapPinLine className="icons-register"></MapPinLine>
                      <input                  
                        className='input-register'
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Dirección"
                        value={userInfo.address}
                        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                )}
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <IdentificationCard className="icons-register"></IdentificationCard>
                    <input
                      className='input-register'
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      placeholder="Número de Identificación"
                      value={userInfo.idNumber}
                      onChange={(e) => setUserInfo({ ...userInfo, idNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <Phone className="icons-register"></Phone>
                    <input
                      className='input-register'
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Teléfono"
                      value={userInfo.phoneNumber}
                      onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <Key className="icons-register"></Key>
                    <input
                      className='input-register'
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      placeholder="Contraseña"
                      value={userInfo.password}
                      onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
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
                      value={userInfo.passwordConfirmation}
                      onChange={(e) => setUserInfo({ ...userInfo, passwordConfirmation: e.target.value })}
                      minLength={8}
                      required
                    />
                    <button onClick={handleShowPasswordToggle}></button>
                  </div>
                </div>
                {/* Campos para microSite */}
                {!showUserPanel && (
                <>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <Desktop  className="icons-register"></Desktop >
                    <input
                      className='input-register'
                      type="text"
                      id="micrositeName"
                      name="micrositeName"
                      placeholder="Nombre del micrositio"
                      value={microSite.micrositeName}
                      onChange={(e) => setMicroSite({ ...microSite, micrositeName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <Desktop  className="icons-register"></Desktop >
                    <input
                      className='input-register'
                      type="text"
                      id="microSiteDescription"
                      name="microSiteDescription"
                      placeholder="Descripción del micrositio"
                      value={microSite.microSiteDescription}
                      onChange={(e) => setMicroSite({ ...microSite, microSiteDescription: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <Buildings className="icons-register"></Buildings>
                    <input
                      className='input-register'
                      type="text"
                      id="ventureName"
                      name="ventureName"
                      placeholder="Nombre del Negocio"
                      value={microSite.ventureName}
                      onChange={(e) => setMicroSite({ ...microSite, ventureName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className='edge-input-icon' tabIndex={0}>
                    <MapPinLine className="icons-register"></MapPinLine>
                    <input
                      className='input-register'
                      type="text"
                      id="ventureAddress"
                      name="ventureAddress"
                      placeholder="Dirección del Negocio"
                      value={microSite.ventureAddress}
                      onChange={(e) => setMicroSite({ ...microSite, ventureAddress: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className='container-mapa'>
                  <div className='map'>
                    <MyMap onCoordinateChange={handleCoordinateChange} />
                  </div>
                  <div className='container-lat-lng'>
                    <div className="input-field">
                      <div className='edge-input-icon' tabIndex={0}>
                        <GlobeHemisphereWest className="icons-register"></GlobeHemisphereWest>
                        <input
                          className='input-register'
                          type="text"
                          id="ventureMapLongitude"
                          name="ventureMapLongitude"
                          placeholder="Longitud"
                          value={microSite.ventureMapLongitude}
                          onChange={(e) => setMicroSite({ ...microSite, ventureMapLongitude: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="input-field">
                      <div className='edge-input-icon' tabIndex={0}>
                        <GlobeHemisphereWest className="icons-register"></GlobeHemisphereWest>
                        <input
                          className='input-register'
                          type="text"
                          id="ventureMapLatitude"
                          name="ventureMapLatitude"
                          placeholder="Latitud"
                          value={microSite.ventureMapLatitude}
                          onChange={(e) => setMicroSite({ ...microSite, ventureMapLatitude: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    className='textarea-register'
                    id="ventureDescription"
                    name="ventureDescription"
                    placeholder="Descripción del Negocio"
                    value={microSite.ventureDescription}
                    onChange={(e) => setMicroSite({ ...microSite, ventureDescription: e.target.value })}
                    required
                  ></textarea>
                </div>
                </>
                )}
                {!isPasswordsMatch && <p className="text-red-500 text-sm">¡Las contraseñas no coinciden!</p>}
                <div className='container-buton'>
                  <button
                    type="submit"
                    className="btn_register"
                    disabled={
                      !isPasswordsMatch ||
                      userInfo.names === '' ||
                      userInfo.email === '' ||
                      userInfo.password !== userInfo.passwordConfirmation
                    }
                    // onClick={() => showEmailVerification}
                  >
                  Registrarse
                  </button>
                </div>
                <Popup
                    isOpen={showPopup}
                    onClose={closePopup}
                    title="Error"
                    message={popupMessage}
                />
              </form>
           )}
           </>
         )}
       </>
     </div>
   </div>
  );
}
export default RegistroComponent;