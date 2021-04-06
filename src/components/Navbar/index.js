import React from 'react';
import './navbar.css'
import {Link} from 'react-scroll'

export default function Navbar({isOpen,toggle}){

    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">DELUXE</a>
            <div className="navbar-toggle" onClick={toggle} id="mobile-menu">
                <span className="bar"/>
                <span className="bar"/>
                <span className="bar"/>
            </div>
            <div className="navbar-menu" >
                <Link to="/" className="navbar-link" smooth={true} onClick={toggle}>Home</Link>
                <Link to="services" className="navbar-link" smooth={true} onClick={toggle}>Services</Link>
                <Link to="plans" className="navbar-link" smooth={true} onClick={toggle}>Plans</Link>
                <Link to="trainers" className="navbar-link" smooth={true} onClick={toggle}>Trainers</Link>
            </div>
        </nav>
    )
}
