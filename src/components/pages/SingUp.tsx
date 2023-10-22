import React, { useState } from 'react';
import './../Styles/Register.css';

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
    microSiteAddress: '',
    microSiteDescription: '',
    micrositeExperiences: '',
  });

  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);
  const [showFields, setShowFields] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  const handleRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Actualiza userInfo usando el formulario
    setUserInfo({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      passwordConfirmation: formData.get('passwordConfirmation') as string,
      idNumber: formData.get('idNumber') as string,
      names: formData.get('names') as string,
      lastNames: formData.get('lastNames') as string,
      address: formData.get('address') as string,
      phoneNumber: formData.get('phoneNumber') as string,
    });

    // Si es una empresa, actualiza microSite usando el formulario
    if (!showUserPanel) {
      setMicroSite({
        ventureAddress: formData.get('ventureAddress') as string,
        ventureDescription: formData.get('ventureDescription') as string,
        ventureMapLatitude: formData.get('ventureMapLatitude') as string,
        ventureMapLongitude: formData.get('ventureMapLongitude') as string,
        ventureName: formData.get('ventureName') as string,
        microSiteAddress: formData.get('microSiteAddress') as string,
        microSiteDescription: formData.get('microSiteDescription') as string,
        micrositeExperiences: formData.get('micrositeExperiences') as string,
      });
    }

    if (userInfo.password === userInfo.passwordConfirmation) {
      setIsPasswordsMatch(true); // Reset to true when passwords match
      console.log(showUserPanel ? userInfo : { ...userInfo, ...microSite });
    } else {
      setIsPasswordsMatch(false); // Las contraseñas no coinciden
    }
  };

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

  const showSelectionButtons = () => {
    setShowFields(false);
    setShowUserPanel(false);
    setShowExplanation(true);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <h2 className="title">Registro</h2>
          {showFields ? (
            <form className="sign-up-form" onSubmit={handleRegistro}>
              {/* Campos para userInfo */}
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="names"
                  name="names"
                  placeholder="Nombres"
                  value={userInfo.names}
                  onChange={(e) => setUserInfo({ ...userInfo, names: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="lastNames"
                  name="lastNames"
                  placeholder="Apellidos"
                  value={userInfo.lastNames}
                  onChange={(e) => setUserInfo({ ...userInfo, lastNames: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-address-card"></i>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Dirección"
                  value={userInfo.address}
                  onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-id-card"></i>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  placeholder="Número de Identificación"
                  value={userInfo.idNumber}
                  onChange={(e) => setUserInfo({ ...userInfo, idNumber: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Teléfono"
                  value={userInfo.phoneNumber}
                  onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  value={userInfo.password}
                  onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                  minLength={8}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  placeholder="Confirma tu Contraseña"
                  value={userInfo.passwordConfirmation}
                  onChange={(e) => setUserInfo({ ...userInfo, passwordConfirmation: e.target.value })}
                  minLength={8}
                  required
                />
              </div>
              {/* Campos para microSite */}
              {!showUserPanel && (
                <>
                  <div className="input-field">
                    <i className="fas fa-building"></i>
                    <input
                      type="text"
                      id="ventureName"
                      name="ventureName"
                      placeholder="Nombre del Negocio"
                      value={microSite.ventureName}
                      onChange={(e) => setMicroSite({ ...microSite, ventureName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-map-marker-alt"></i>
                    <input
                      type="text"
                      id="ventureAddress"
                      name="ventureAddress"
                      placeholder="Dirección del Negocio"
                      value={microSite.ventureAddress}
                      onChange={(e) => setMicroSite({ ...microSite, ventureAddress: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-info-circle"></i>
                    <textarea
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
              <button
                type="submit"
                disabled={
                  !isPasswordsMatch ||
                  // Puedes agregar más validaciones según las necesidades.
                  userInfo.names === '' ||
                  userInfo.email === '' ||
                  userInfo.password !== userInfo.passwordConfirmation
                }
                className="btn"
              >
                Registrarse
              </button>
              {/* Puedes agregar más elementos si es necesario */}
            </form>
          ) : (
            <div>
              {/* Este es el contenido que se muestra antes de seleccionar el tipo de registro */}
              <button onClick={showFieldsForUser} className="btn">Registro para Usuarios</button>
              <button onClick={showFieldsForCompany} className="btn">Registro para Empresas</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default RegistroComponent;
