import React, { useState } from 'react';
import'./../Styles/Register.css'
function RegistroComponent() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    direccion: '',
    telefono: '',
    password: '',
    repeatPass: '',
  });

  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);

  const handleRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    // Accede a los valores de los campos de entrada según sea necesario
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const direccion = formData.get("direccion");
    const telefono = formData.get("telefono");
    const password = formData.get("password");
    const repeatPass = formData.get("repeatPass");
  
    // Crea un objeto de usuario con los valores
    const usuario = {
      nombre: nombre as string,
      email: email as string,
      direccion: direccion as string,
      telefono: telefono as string,
      password: password as string,
      repeatPass: repeatPass as string,
    };
  
    console.log(usuario);
  };
   
  

  const checkPasswordsMatch = () => {
    setIsPasswordsMatch(usuario.password === usuario.repeatPass);
  };

  return (
    <div className="forms-container">
      <form className="sign-up-form" onSubmit={handleRegistro}>
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Name"
            name="nombre"
            value={usuario.nombre}
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
            required
            maxLength={150}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            required
            maxLength={100}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-home"></i>
          <input
            type="text"
            placeholder="Address"
            name="direccion"
            value={usuario.direccion}
            onChange={(e) => setUsuario({ ...usuario, direccion: e.target.value })}
            required
            maxLength={100}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-mobile-alt"></i>
          <input
            type="text"
            placeholder="Telephone"
            name="telefono"
            value={usuario.telefono}
            onChange={(e) => setUsuario({ ...usuario, telefono: e.target.value })}
            required
            maxLength={11}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={usuario.password}
            onChange={(e) => {
              setUsuario({ ...usuario, password: e.target.value });
              checkPasswordsMatch();
            }}
            required
            minLength={8}
            maxLength={100}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeatPass"
            value={usuario.repeatPass}
            onChange={(e) => {
              setUsuario({ ...usuario, repeatPass: e.target.value });
              checkPasswordsMatch();
            }}
            required
            minLength={8}
            maxLength={100}
          />
        </div>
        {!isPasswordsMatch && <p>Passwords do not match!</p>}
        <button
          type="submit"
          disabled={
            usuario.nombre === '' ||
            usuario.email === '' ||
            usuario.direccion === '' ||
            usuario.telefono === '' ||
            usuario.password === '' ||
            usuario.repeatPass === '' ||
            !isPasswordsMatch
          }
          className="btn solid"
        >
          Sign Up
        </button>
        <p className="social-text">Or Sign up width social platforms</p>
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
    </div>
  );
}

export default RegistroComponent;
