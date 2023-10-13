import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import Image1 from "../../assets/HeroVector.png";
import Image2 from "../../assets/imageLogo.png"
import { useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { Image } from "../atoms/Image"
import "../Styles/Login.css";

export default function Login() {

  const [ idNumber, setIdNumber ] = useState("");
  const [ password, setPassword ] = useState("");
  const auth = useAuth();

  async function handleSubmit() {

    try {
      let data = {idNumber: "119337",password: "password"};

      const response = await fetch( 'https://beta.api.turismoenlacordillera.com/api/auth/login', {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if(response.ok){
        console.log("Usuario iniciado correctamente")
        console.log(response);
        return <Navigate to="/" />;

      } else{
        console.log("Usuario o contraseña incorrecta")
        console.log(response);
      }
    } catch (error) {
      console.log(error)
    }
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
                <a className="login-button" onClick={handleSubmit}>Login</a>
                {/* <button type="submit" className="login-button">Login</button> */}
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
