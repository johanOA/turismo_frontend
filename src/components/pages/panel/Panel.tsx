import NavBarPanel from "./parts/NavBarPanel";
import Footer from "../../organs/Footer";
import Image1 from "../../../assets/HeroVector.png";
import Image2 from "../../../assets/imageLogo.png"
import { useState } from "react";
import { useAuth } from "../../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { Image } from "../../atoms/Image";
import httpClient from "../../../config/httpClient.js"; 
import CustomSidebar from "./parts/CustomSidebar.js";


export default function Panel() {

  const { isAuthenticated, setIsAuthenticated, userInfo,setUserInfo} = useAuth();
  return (
      <div className="login-container">
        <NavBarPanel />
        <section className="w-full h-full relative overflow-x-hidden flex justify-between">
          <CustomSidebar/>

        <div className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%] relative">
                <Image className="h-full w-full object-cover" image={Image1} alt="Hero Background Vector" />
                <Image className="top-image" image={Image2} alt="Login Template Image" />
          </div>

        </section>
      <Footer />
      </div>
  );
}
