import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection"
import NewsLetter from "../organs/NewsLetter"
import Partners from "../organs/Partners"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"
import { useEffect } from "react"


const Home = () => {
    useEffect(() => {
        let papa = {"papabomba" : "es rancia"};
        console.log("cargado");
        window.localStorage.setItem("papa", JSON.stringify(papa));
    }, []);
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            <BookingSteps />
            <Testimonials />
            <Partners />
            <NewsLetter />
        </>
    )
}

export default Home