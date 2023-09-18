import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import "./Login.css"; // Archivo CSS para el estilo específico de Login
import { useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";


export default function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to="/Home" />
  }

  return (
    <div className="login-container">
      <NavBar />
      <section className="login-section">
        {/* <Image className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]" image={bgImage} alt="Hero Background Vector" /> */}
        <div className="login-content">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail (e.target.value )} className="login-input" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword (e.target.value)} className="login-input" />
            </div>
            <button className="login-button">Login</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
