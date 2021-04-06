import React, {useState} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Membership from "./components/Membership";
import Team from "./components/Team";
import Email from "./components/Email";
import Footer from "./components/Footer";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)

        const menu = document.querySelector('#mobile-menu')
        const menuLinks = document.querySelector('.navbar-menu')
        const body = document.querySelector('body')

        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
        body.classList.toggle('active')

    }

    return (
        <>
            <Navbar toggle={toggle} isOpen={isOpen}/>
            <Hero/>
            <Services/>
            <Membership/>
            <Team/>
            <Email/>
            <Footer/>
        </>
    );
}

export default App;
