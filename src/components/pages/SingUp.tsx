import React, { useState } from 'react';
import './../Styles/Register.css';

function RegistroComponent() {
  
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    direccion: '',
    telefono: '',
    password: '',
    repeatPass: '',
    // Campos adicionales para Emprendedora
    nombreNegocio: '',
    servicio: '',
  });

  
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);
  const [showFields, setShowFields] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  const handleRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const direccion = formData.get('direccion');
    const telefono = formData.get('telefono');
    const password = formData.get('password');
    const repeatPass = formData.get('repeatPass');

    const usuario = {
      nombre: nombre,
      email: email,
      direccion: direccion,
      telefono: telefono,
      password: password,
      repeatPass: repeatPass,
      // Campos adicionales para Emprendedora
      nombreNegocio: showUserPanel ? '' : formData.get('nombreNegocio'),
      servicio: showUserPanel ? '' : formData.get('servicio'),
    };

    console.log(usuario);
  };

  const checkPasswordsMatch = () => {
    setIsPasswordsMatch(usuario.password === usuario.repeatPass);
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
          {/* Título visible en todo momento */}
          <h2 className="title">Registro</h2>
          {showFields ? (
            <form className="sign-up-form" onSubmit={handleRegistro}>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  value={usuario.nombre}
                  onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
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
                  value={usuario.email}
                  onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-address-card"></i>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  placeholder="Direccion"
                  value={usuario.direccion}
                  onChange={(e) => setUsuario({ ...usuario, direccion: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="Celular"
                  value={usuario.telefono}
                  onChange={(e) => setUsuario({ ...usuario, telefono: e.target.value })}
                  required
                />
              </div>
              <div className="input-field">
  <i className="fas fa-lock"></i>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Password"
    value={usuario.password}
    onChange={(e) => {
      setUsuario({ ...usuario, password: e.target.value });
      checkPasswordsMatch(); // Llama a la función para verificar las contraseñas
    }}
    minLength={8}
    required
  />
</div>
<div className="input-field">
  <i className="fas fa-lock"></i>
  <input
    type="password"
    id="repeatPass"
    name="repeatPass"
    placeholder="Repite tu Password"
    value={usuario.repeatPass}
    onChange={(e) => {
      setUsuario({ ...usuario, repeatPass: e.target.value });
      checkPasswordsMatch(); // Llama a la función para verificar las contraseñas
    }}
    minLength={8}
    required
  />
</div>
              {/* Campos adicionales para Emprendedora */}
              {!showUserPanel && (
                <>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="nombreNegocio"
                      name="nombreNegocio"
                      placeholder="Nombre del Negocio"
                      value={usuario.nombreNegocio}
                      onChange={(e) => setUsuario({ ...usuario, nombreNegocio: e.target.value })}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="servicio"
                      name="servicio"
                      placeholder="Servicio"
                      value={usuario.servicio}
                      onChange={(e) => setUsuario({ ...usuario, servicio: e.target.value })}
                      required
                    />
                  </div>
                </>
              )}
              {!isPasswordsMatch && <p className="text-red-500 text-sm">Passwords do not match!</p>}
              <button
                type="submit"
                disabled={
                  usuario.nombre === '' ||
                  usuario.email === '' ||
                  usuario.direccion === '' ||
                  usuario.telefono === '' ||
                  usuario.password === '' ||
                  usuario.repeatPass === '' ||
                  (!showUserPanel && (usuario.nombreNegocio === '' || usuario.servicio === '')) ||
                  !isPasswordsMatch
                }
                className="btn"
              >
                Registrarse
              </button>
              <p className="social-text">O registrate con Google.</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          ) : (
            <>
              {/* Texto de explicación */}
              {showExplanation && (
                <p>
                  Únete como cliente para interactuar y opinar, o como emprendedora para mostrar tu negocio al mundo. Pero recuerda, ¡explorar es gratis!
                </p>
              )}
              {/* Botones de selección */}
              <div className="register-selection">
                <button onClick={showFieldsForUser}>Usuario</button>
                <button onClick={showFieldsForCompany}>Emprendedora</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="panels-container">
        {/* Botón para volver a la selección de tipo */}
        {showFields && (
          <div className="panel">
            <button onClick={showSelectionButtons}>Volver</button>
          </div>
        )}
        <div className={`panel ${showUserPanel ? 'left-panel' : 'right-panel'}`}>
          {showFields ? (
            showUserPanel ? (
              <div>
                <h3>Panel de Registro de Usuario</h3>
                <p>Formulario de registro para usuarios</p>
              </div>
            ) : (
              <div>
                <h3>Panel de Registro de Empresa</h3>
                <p>Formulario de registro para empresas</p>
              </div>
            )
          ) : (
            <div>
              {/* Contenido del panel izquierdo (Usuario) */}
            </div>
          )}
        </div>
        <div className={`panel ${showUserPanel ? 'right-panel' : 'left-panel'}`}>
          {/* Contenido del panel derecho (Empresa) */}
        </div>
      </div>
    </div>
  );
}

export default RegistroComponent;
