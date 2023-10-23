import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import Image1 from "../../assets/HeroVector.png";
import Image2 from "../../assets/imageLogo.png"
import { useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { Image } from "../atoms/Image";
import httpClient from "../../config/httpClient.js"; 
import "../Styles/Login.css";

export default function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const { isAuthenticated, setIsAuthenticated, userInfo,setUserInfo} = useAuth();
  if(isAuthenticated){
    return <Navigate to="/" />
  }
  const handleSubmit  = ()  => {
	httpClient.post("auth/login", {idNumber:email,password:password})
      .then((response) => {
        // Manejar la respuesta de la solicitud
        if(response.data.success)
            {
              let responseUserInfo = response.data.data;
              var  newUserInfo = {
                  accessCode: responseUserInfo.accessCode??"2",
                  accessDescription: responseUserInfo.accessDescription??"",
                  email: responseUserInfo.email??"",
                  username: responseUserInfo.username??"",
                }
                setIsAuthenticated(true);
                setUserInfo(newUserInfo);
                console.log(userInfo);
            }
      })
      .catch((error) => {
        console.error('Error al hacer la solicitud:', error);
      });
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
              <h1 className="login-title">Ingreso</h1>
              <form className="login-form">
                <div className="form-group">
                  <label>Numero de Identidad</label>
                  <input type="text" value={email} onChange={(e) => setEmail (e.target.value )} className="login-input" placeholder="123456789" />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" value={password} onChange={(e) => setPassword (e.target.value)} className="login-input" placeholder="Ingresa tu contraseña" />
                </div>
                <a className="login-button" onClick={handleSubmit}>Login</a>
              </form>
            </div>
          </main>
          
        </section>
      <Footer />
      </div>
  );
}
