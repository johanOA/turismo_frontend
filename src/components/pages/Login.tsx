import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import Image1 from "../../assets/HeroVector.png";
import Image2 from "../../assets/imageLogo.png"
import { useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { Image } from "../atoms/Image";
// import httpClient from "../../config/httpClient.js"; 
import "../Styles/Login.css";
import axios from 'axios';
import Modal from 'react-modal';

export default function Login() {

  const [ idNumber, setIdNumber ] = useState("");
  const [ password, setPassword ] = useState("");
  const [mostrarIncorrecto, setMostrarIncorrecto] = useState(false);
  const [mostrarCorrecto, setMostrarCorrecto] = useState(false);
  const auth = useAuth();

  async function handleSubmit() {
    // Realizar la solicitud HTTP al endpoint
    axios.post('https://beta.api.turismoenlacordillera.com/api/auth/login', {
        idNumber: idNumber,
        password: password
    })
      .then((response) => {
        // Manejar la respuesta de la solicitud
        if(response.data.success){
          let loginInfo = response.data.data;
          console.log(loginInfo)
          console.log("Usuario iniciado correctamente")
          // Mostrar el popup de login correcto
          setMostrarCorrecto(true);
          // return <Navigate to="/" />;
      }else{
        // Mostrar el popup de login incorrecto
        setMostrarIncorrecto(true);
        console.log(response.data.message)
      }})
      .catch((error) => {
        console.error('Error al hacer la solicitud:', error);
      });
  }

  if(auth.isAuthenticated){
    return <Navigate to="/" />
  }

  return (
      <div className="login-container">
        <header className="header">
        <NavBar />
        </header>
        <section className="login-section">
          <div className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%] relative">
              <Image className="h-full w-full object-cover" image={Image1} alt="Hero Background Vector" />
              <Image className="top-image" image={Image2} alt="Login Template Image" />
          </div>
          <main className="main">
            <div className="login-content">
              <h1 className="login-title">Login</h1>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" value={idNumber} onChange={(e) => setIdNumber (e.target.value )} className="login-input" placeholder="Numero de Identidad" />
                </div>
                <div className="form-group">
                  <input type="password" value={password} onChange={(e) => setPassword (e.target.value)} className="login-input" placeholder="Ingresa tu contraseña" />
                  <a href="#" className="password-option">¿Olvidaste tu contraseña?</a>
                </div>
                <a className="login-button" onClick={handleSubmit}>Iniciar sesion</a>
              </form>
              <div className="form-group">
                <div className="register-option">¿Aún no tienes una cuenta? 
                  <a href="/Register" className="link"> Clic aquí</a>
                </div>
              </div>
            </div>
          </main>
        </section>
      <Footer />
      </div>
  );
}
