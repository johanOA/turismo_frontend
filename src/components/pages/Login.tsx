import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import Image1 from "../../assets/HeroVector.png";
// import Image2 from "../../assets/imageLogo.png"
import { useState } from "react";
import { useAuth } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { Image } from "../atoms/Image"
import "../Styles/Login.css";

export default function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to="/" />
  }

  return (
      <div className="login-container">
        <header className="header">
        <NavBar />
        </header>
        <section className="login-section">
          <div className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%] flex flex-row">
          <Image className="w-full h-full flex-1 order-2" image={Image1} alt="Hero Background Vector" />
          {/* <Image className="w-full h-full flex-1 order-1" image={Image2} alt="Login Template Image" /> */}
          </div>
          <main className="main">
            <div className="login-content">
              <h1 className="login-title">Login</h1>
              <form className="login-form">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail (e.target.value )} className="login-input" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword (e.target.value)} className="login-input" />
                </div>
                <a className="login-button">Login</a>
              </form>
            </div>
          </main>
        </section>
      <Footer />
      </div>
  );
}
