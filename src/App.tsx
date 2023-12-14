import { Outlet,Route, Routes } from "react-router-dom";
import NavBar from "./components/organs/NavBar"
import Footer from "./components/organs/Footer";
import './components/Styles/PagesTailwinds.css';
import Home from "./components/pages/Home";

function App() {

  return (
    <div className="container-pages bg-gray-100">
      {/* <NavBar /> */}
      <div className='container-internal-pages '>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default App