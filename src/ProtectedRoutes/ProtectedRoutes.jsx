import { Outlet, Navigate } from "react-router-dom";
import NavBarPanel from "../components/pages/panel/parts/NavBarPanel.jsx";
import Footer from "../components/organs/Footer.jsx";
import CustomSidebar from "../components/pages/panel/parts/CustomSidebar.jsx";
// import { getUserToken, setUserToken } from "../localStorage/localStorage.js";


const ProtectedRoutes = () => {
    
    // if (getUserToken != null) {
      return (
          <div className="panel-container">
            <NavBarPanel />
            <section className="w-full h-full relative overflow-x-hidden flex justify-between">
              <CustomSidebar/>
              <Outlet />
            </section>
            <Footer />
          </div>
        );
//     }else{
//       return <Navigate to="/login" />;
//     }
};

export default ProtectedRoutes;