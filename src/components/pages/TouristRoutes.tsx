import NavBar from "../organs/NavBar";
import Footer from "../organs/Footer";
import './../Styles/PagesTailwinds.css';

export default function TouristRoutes() {
    return (
        <div className="container-pages">
            <div className='container-internal-pages'>
                <NavBar />
                    <h1>TouristRoutes</h1>
            </div>
            <Footer />
        </div>
    )
}